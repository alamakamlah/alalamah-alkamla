import User from '../models/user.js'
import mongoose from 'mongoose'
import express from 'express'

const router = express.Router()


export const getUsers = async (req, res) => {
    try {
        const users = await User.find().sort({ _id: -1 })
        res.status(200).json({data: users})
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const getUsersBySearch = async (req, res) => {
    const { searchQuery, system, type } = req.query;
    try {
        const name = new RegExp(searchQuery, "i");

        const users = await User.find({ $or: [
            { name },
            { $and: [{"system.english": system }, { "type.english": type }]},
        ]});

        res.json({ data: users });
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
}


export const getUser = async (req, res) => { 
    const { id } = req.params;

    try {
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export const deleteUser = async (req, res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No request with that id');
    
    await User.findByIdAndRemove(id);
    
    res.json({message: 'Request deleted successfully'});
}

export const updateUser = async (req, res) => {
    const {id: _id} = req.params;
    const user = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');
    const updatedUser = await User.findByIdAndUpdate(_id, {...user, _id}, {new: true});
    res.json(updatedUser);
    
}


