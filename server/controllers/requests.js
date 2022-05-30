import Request from '../models/request.js'
import mongoose from 'mongoose'
import express from 'express'

const router = express.Router()


export const getRequests = async (req, res) => {
    try {
        const requests = await Request.find().sort({ _id: -1 })
        res.status(200).json({data: requests})
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const getRequest = async (req, res) => { 
    const { id } = req.params;

    try {
        const request = await Request.findById(id);
        res.status(200).json(request);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createRequest = async (req, res) => {
    const request = req.body

    const newRequest = new Request(request)
    try {
        await newRequest.save()
        res.status(201).json(newRequest)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

export const deleteRequest = async (req, res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No request with that id');
    
    await Request.findByIdAndRemove(id);
    
    res.json({message: 'Request deleted successfully'});
}


