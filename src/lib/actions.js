// src/lib/actions.js

'use server';
import { PostModel, UserModel } from './model';
import { connectToDB } from './utils';
import { signIn, signOut } from './auth';
import bcrypt from 'bcrypt';

export const addPost=async ( formData ) =>
{
        const { title, desc, slug, userid }=Object.fromEntries( formData );
        console.log( title );
        try
        {
                await connectToDB();
        } catch ( err )
        {
                throw new Error( "Error: "+err );
        }

        const post=new PostModel( {
                title,
                desc,
                slug,
                userId: userid
        } );
        await post.save();
        console.log( "Post Saved Successfully" );
};

export const handleGithubLogin=async () =>
{
        await signIn( 'github' );
};

export const handleGithubSignout=async () =>
{
        await signOut();
};
export const registerUser=async ( formData ) =>
{
        const { username, email, password, repeatPassword }=Object.fromEntries( formData );
        if ( password!==repeatPassword )
        {
                return "Please confirm the password correctly";
        }

        try
        {
                await connectToDB();
                const existingUser=await UserModel.findOne( { email } );
                if ( !existingUser )
                {
                        const salt=bcrypt.genSalt( 10 );
                        const hashPass=await bcrypt.hash( password, salt );
                        const newUser=new UserModel( { username, password: hashPass, email } );
                        await newUser.save();
                        return "User registered successfully";
                } else
                {
                        return "User already exists";
                }
        } catch ( err )
        {
                console.log( err );
                return "Something went wrong";
        }
};

export const login=async ( formData ) =>
{
        const { username, password }=Object.Entries( formData );
        try
        {
                signIn( 'credentials', {
                        username, password
                } )
        }
        catch ( err )
        {
                return { error: "Something Went Wrong" };
        }
}