import mongoose, { model, Schema } from 'mongoose';

const blogSchema = new Schema({
    prefix:{
        type: String,
        required: true,
        trim: true, 
        lowercase: true,
        unique: true
    },
    title:{
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    }

}, {
    versionKey: false,
    timestamps: true
});

export default model('Blog', blogSchema);