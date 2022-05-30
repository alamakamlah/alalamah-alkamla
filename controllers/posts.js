import Post from '../models/post.js'
import mongoose from 'mongoose'
import express from 'express'

const router = express.Router();


export const getPosts = async (req, res) => {
    try {
        const posts = await Post.find().sort({ _id: -1 })
        res.status(200).json({data: posts})
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const getPostsBySearch = async (req, res) => {
    const { searchQuery, subject } = req.query;

    try {
        const title = new RegExp(searchQuery, "i");

        const posts = await Post.find({ $or: [ { title }, { subject } ]});
        res.json({ data: posts });

    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
}

export const getPost = async (req, res) => { 
    const { id } = req.params;

    try {
        const post = await Post.findById(id);
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export const createPost = async (req, res) => {
    const post = req.body

    const newPost = new Post(post)
    try {
        await newPost.save()
        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

export const updatePost = async (req, res) => {
    const {id: _id} = req.params;
    const post = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');
    const updatedPost = await Post.findByIdAndUpdate(_id, {...post, _id}, {new: true});
    res.json(updatedPost);
    
}

export const deletePost = async (req, res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');
    
    await Post.findByIdAndRemove(id);
    
    res.json({message: 'Post deleted successfully'});
}

export const commentPost = async (req, res) => {
    const {id} = req.params;
    const {value} = req.body;

    const post = await Post.findById(id);

    post.comments.push(value);

    const updatedPost = await Post.findByIdAndUpdate(id, post, {new: true});

    res.json(updatedPost);
}

export const likePost = async (req, res) => {
    const { id } = req.params;

    if (!req.userId) {
        return res.json({ message: "Unauthenticated" });
      }

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    
    const post = await Post.findById(id);

    const index = post.likes.findIndex((id) => id ===String(req.userId));

    if (index === -1) {
      post.likes.push(req.userId);
    } else {
      post.likes = post.likes.filter((id) => id !== String(req.userId));
    }

    const updatedPost = await Post.findByIdAndUpdate(id, post, { new: true });

    res.status(200).json(updatedPost);
}