import {RequestHandler} from 'express'
import Blog from './blog'

export const createPost: RequestHandler = async (req, res) =>{
    const prefixFound= await Blog.findOne({prefix: req.body.prefix.toLowerCase()})
    if(prefixFound){
        return res.status(301).json({message: "The URL already exists"});
    }
    const blog = new Blog(req.body);
    const savedPost = await blog.save();
    res.json(savedPost);
}

export const detelePost: RequestHandler = async (req, res) =>{
    const prefixFound= await Blog.findOneAndDelete({prefix: req.params.prefix.toLowerCase()})
    if(!prefixFound){
        return res.status(301).json({message: "URL not found"});
    }
    res.json(prefixFound);
}

export const getPost: RequestHandler = async (req, res) =>{
    const prefixFound= await Blog.findOne({prefix: req.params.prefix.toLowerCase()})
    if(!prefixFound){
        return res.status(204).json({message: "URL not found"});
    }
    res.json(prefixFound);
}

export const updatePost: RequestHandler = async (req, res) =>{
    const prefixUpdated = await Blog.findOneAndUpdate({prefix: req.params.prefix.toLowerCase()}, req.body, {new: true});
    if(!prefixUpdated){
        return res.status(204).json({message: "URL not found"});
    }
    res.json(prefixUpdated);
}

export const getPosts: RequestHandler = async (req, res) =>{
    try{
        const blogs:{} = await Blog.find();
        return res.json(blogs);
    } catch(err){
        res.json(err);
    }
}
