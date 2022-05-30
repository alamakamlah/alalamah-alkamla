import Product from '../models/storeproducts.js'
import mongoose from 'mongoose'
import express from 'express'

const router = express.Router();

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find().sort({ _id: -1 })
        res.status(200).json({data: products})
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const getProductsBySearch = async (req, res) => {
    const { searchQuery, grade, term, subject } = req.query;

    try {
        const title = new RegExp(searchQuery, "i");

        const products = await Product.find({ $or: [
            { title },
            { $and: [{"grade.english": grade }, { "term.english": term }, { "subject.english": subject }]},
        ]});

        res.json({ data: products });
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
}

export const getProduct = async (req, res) => { 
    const { id } = req.params;

    try {
        const product = await Product.findById(id);
        
        res.status(200).json(product);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createProduct = async (req, res) => {
    const product = req.body

    const newProduct = new Product(product)
    try {
        await newProduct.save()
        res.status(201).json(newProduct)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

export const updateProduct = async (req, res) => {
    const {id: _id} = req.params;
    const product = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');
    const updatedProduct = await Product.findByIdAndUpdate(_id, {...product, _id}, {new: true});
    res.json(updatedProduct);
    
}

export const deleteProduct = async (req, res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');
    
    await Product.findByIdAndRemove(id);
    
    res.json({message: 'Post deleted successfully'});
}

export const commentProduct = async (req, res) => {
    const {id} = req.params;
    const {value} = req.body;

    const product = await Product.findById(id);

    product.reviews.push(value);

    const updatedProduct = await Product.findByIdAndUpdate(id, product, {new: true});

    res.json(updatedProduct);
}