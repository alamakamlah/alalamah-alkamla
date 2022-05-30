import Test from '../models/test.js'
import mongoose from 'mongoose'
import express from 'express'

const router = express.Router();

export const getTests = async (req, res) => {
    try {
        const tests = await Test.find().sort({ _id: -1 })
        res.status(200).json({data: tests})
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const getTestsBySearch = async (req, res) => {
    const { searchQuery, grade, term, subject } = req.query;

    try {
        const title = new RegExp(searchQuery, "i");

        const tests = await Test.find({ $or: [
            { title },
            { $and: [{"grade.english": grade }, { "term.english": term }, { "subject.english": subject }]},
        ]});

        res.json({ data: tests });
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
}

export const getTest = async (req, res) => { 
    const { id } = req.params;

    try {
        const test = await Test.findById(id);
        
        res.status(200).json(test);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createTest = async (req, res) => {
    const test = req.body

    const newTest = new Test(test)
    try {
        await newTest.save()
        res.status(201).json(newTest)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

export const updateTest = async (req, res) => {
    const {id: _id} = req.params;
    const test = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No test with that id');
    const updatedTest = await Test.findByIdAndUpdate(_id, {...test, _id}, {new: true});
    res.json(updatedTest);
    
}

export const deleteTest = async (req, res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No test with that id');
    
    await Test.findByIdAndRemove(id);
    
    res.json({message: 'Post deleted successfully'});
}
