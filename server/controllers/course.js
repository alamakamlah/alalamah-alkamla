import Course from '../models/course.js'
import mongoose from 'mongoose'
import express from 'express'

const router = express.Router();

export const getCourses = async (req, res) => {
    try {
        const course = await Course.find().sort({ _id: -1 })
        res.status(200).json({data: course})
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const getCourseBySearch = async (req, res) => {
    const { searchQuery, grade, term, subject } = req.query;

    try {
        const title = new RegExp(searchQuery, "i");

        const course = await Course.find({ $or: [
            { title },
            { $and: [{"grade.english": grade }, { "term.english": term }, { "subject.english": subject }]},
        ]});

        res.json({ data: course });
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
}

export const getCourse = async (req, res) => { 
    const { id } = req.params;

    try {
        const course = await Course.findById(id);
        
        res.status(200).json(course);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createCourse = async (req, res) => {
    const course = req.body

    const newCourse = new Course(course)
    try {
        await newCourse.save()
        res.status(201).json(newCourse)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

export const updateCourse = async (req, res) => {
    const {id: _id} = req.params;
    const course = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');
    const updatedCourse = await Course.findByIdAndUpdate(_id, {...course, _id}, {new: true});
    res.json(updatedCourse);
    
}

export const deleteCourse = async (req, res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No Course with that id');
    
    await Course.findByIdAndRemove(id);
    
    res.json({message: 'Course deleted successfully'});
}

export const commentCourse = async (req, res) => {
    const {id} = req.params;
    const {value} = req.body;

    const course = await Course.findById(id);

    course.reviews.push(value);

    const updatedCourse = await Course.findByIdAndUpdate(id, course, {new: true});

    res.json(updatedCourse);
}