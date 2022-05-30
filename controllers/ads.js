import Ad from '../models/ad.js'
import mongoose from 'mongoose'
import express from 'express'

const router = express.Router();

export const getAds = async (req, res) => {
    try {
        const ads = await Ad.find().sort({ _id: -1 })
        res.status(200).json({data: ads})
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}


export const createAd = async (req, res) => {
    const ad = req.body

    const newAd = new Ad(ad)
    try {
        await newAd.save()
        res.status(201).json(newAd)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

export const updateAd = async (req, res) => {
    const {id: _id} = req.params;
    const ad = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No ad with that id');
    const updatedAd = await Ad.findByIdAndUpdate(_id, {...ad, _id}, {new: true});
    res.json(updatedAd);
    
}

export const deleteAd = async (req, res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No ad with that id');
    
    await Ad.findByIdAndRemove(id);
    
    res.json({message: 'Ad deleted successfully'});
}
