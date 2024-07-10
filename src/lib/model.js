import mongoose from 'mongoose';

import { connectToDB } from './utils';


const userSchema=new mongoose.Schema( {
        username: { type: String, required: true, unique: true, min: 3, max: 20 },
        email: { type: String, required: true, unique: true, max: 50 },
        password: { type: String, min: 6 },
        img: { type: String },
        isAdmin: { type: Boolean, default: false },
}, { timestamps: true } );

const postSchema=new mongoose.Schema( {
        title: { type: String, required: true, max: 100 },
        desc: { type: String, required: true },
        img: { type: String },
        userId: { type: String, required: true },
        slug: { type: String, required: true, unique: true },
}, { timestamps: true } );

export const UserModel=mongoose.models.User||mongoose.model( 'User', userSchema );
export const PostModel=mongoose.models.Post||mongoose.model( 'Post', postSchema );
