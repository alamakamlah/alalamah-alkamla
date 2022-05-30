import Library from '../models/library.js'
import mongoose from 'mongoose'
import express from 'express'

const router = express.Router();

export const getLibrary = async (req, res) => {
    try {
        const library = await Library.find().sort({ _id: -1 })
        res.status(200).json({data: library})
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const getLibraryBySearch = async (req, res) => {
    const { searchQuery, grade, term, subject } = req.query;

    try {
        const title = new RegExp(searchQuery, "i");

        const library = await Library.find({ $or: [
            { title },
            { $and: [{"grade.english": grade }, { "term.english": term }, { "subject.english": subject }]},
        ]});
        
        res.json({ data: library });
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
}

export const getLibraryItem = async (req, res) => { 
    const { id } = req.params;

    try {
        const library = await Library.findById(id);
        
        res.status(200).json(library);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createLibrary = async (req, res) => {
    const library = req.body

    const newLibrary = new Library(library)
    try {
        await newLibrary.save()
        res.status(201).json(newLibrary)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

export const updateLibrary = async (req, res) => {
    const {id: _id} = req.params;
    const library = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');
    const updatedLibrary = await Library.findByIdAndUpdate(_id, {...library, _id}, {new: true});
    res.json(updatedLibrary);
    
}

export const deleteLibrary = async (req, res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');
    
    await Library.findByIdAndRemove(id);
    
    res.json({message: 'Post deleted successfully'});
}

export const commentLibrary = async (req, res) => {
    const {id} = req.params;
    const {value} = req.body;

    const library = await Library.findById(id);

    library.reviews.push(value);

    const updatedLibrary = await Library.findByIdAndUpdate(id, library, {new: true});

    res.json(updatedLibrary);
}