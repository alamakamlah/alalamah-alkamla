import Lesson from '../models/lesson.js'
import mongoose from 'mongoose'
import express from 'express'

const router = express.Router();

export const getLessons = async (req, res) => {
    try {
        const lessons = await Lesson.find().sort({ _id: -1 })
        res.status(200).json({data: lessons})
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const getLessonsBySearch = async (req, res) => {
    const { searchQuery, grade, term, subject } = req.query;

    try {
        const title = new RegExp(searchQuery, "i");

        const lessons = await Lesson.find({ $or: [
            { title },
            { $and: [{"grade.english": grade }, { "term.english": term }, { "subject.english": subject }]},
        ]});
        res.json({ data: lessons });
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
}

export const getLesson = async (req, res) => { 
    const { id } = req.params;

    try {
        const lesson = await Lesson.findById(id);
        
        res.status(200).json(lesson);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createLesson = async (req, res) => {
    const lesson = req.body

    const newLesson = new Lesson(lesson)
    try {
        await newLesson.save()
        res.status(201).json(newLesson)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

export const updateLesson = async (req, res) => {
    const {id: _id} = req.params;
    const lesson = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No lesson with that id');
    const updatedLesson = await Lesson.findByIdAndUpdate(_id, {...lesson, _id}, {new: true});
    res.json(updatedLesson);
    
}

export const deleteLesson = async (req, res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No Lesson with that id');
    
    await Lesson.findByIdAndRemove(id);
    
    res.json({message: 'Post deleted successfully'});
}
