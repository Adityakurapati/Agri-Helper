// src/lib/actions.js

'use server'
import mongoose from "mongoose";
import { PostModel } from "./model";
import { connectToDB } from "./utils";
import { signIn, signOut } from "./auth";

export const addPost=async ( formData ) =>
{
        // console.log( formData )
        const { title, desc, slug, userid }=Object.fromEntries( formData )
        console.log( title )
        try
        {
                connectToDB();
        } catch ( err )
        {
                throw new Error( "Error : "+err )
        }

        const post=new PostModel( {
                title, desc, slug, userId: userid
        } )
        await post.save();
        console.log( "Post Save Successfully" )
};


export const handleGithubLogin=async () =>
{
        await signIn( 'github' )
}
export const handleGithubSignout=async () =>
{
        await signOut();
}