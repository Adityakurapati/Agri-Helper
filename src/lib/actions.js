'use server';
import { PostModel, UserModel } from './model';
import { connectToDB } from './utils';
import { signIn, signOut } from './auth';
import bcrypt from 'bcryptjs';
import { revalidatePath } from 'next/cache';

export const addPost=async ( formData ) =>
{
        const { title, desc, slug, userid }=Object.fromEntries( formData );
        console.log( title );
        try
        {
                await connectToDB();
                const post=new PostModel( {
                        title,
                        desc,
                        slug,
                        userId: userid
                } );
                await post.save();
                console.log( "Post Saved Successfully" );
                revalidatePath( '/posts' ); // Assuming you have a posts page
        } catch ( err )
        {
                console.error( "Error adding post:", err );
                throw new Error( "Failed to add post: "+err.message );
        }
};

export const deleteUser=async ( formData ) =>
{
        const { id }=Object.fromEntries( formData );
        try
        {
                await connectToDB();
                await UserModel.findByIdAndDelete( id );
                console.log( "User Deleted Successfully" );
                revalidatePath( '/admin' );
        } catch ( err )
        {
                console.error( "Error deleting user:", err );
                throw new Error( "Failed to delete user: "+err.message );
        }
};

export const handleGithubLogin=async () =>
{
        await signIn( 'github' );
};

export const handleGithubSignout=async () =>
{
        await signOut();
};

export const register=async ( previousState, formData ) =>
{
        const { username, email, password, img, passwordRepeat }=Object.fromEntries( formData );

        if ( password!==passwordRepeat )
        {
                return { error: "Passwords do not match" };
        }

        try
        {
                await connectToDB();
                const existingUser=await UserModel.findOne( { username } );

                if ( existingUser )
                {
                        return { error: "Username already exists" };
                }

                const salt=await bcrypt.genSalt( 10 );
                const hashedPassword=await bcrypt.hash( password, salt );

                const newUser=new UserModel( {
                        username,
                        email,
                        password: hashedPassword,
                        img,
                } );

                await newUser.save();
                console.log( "User registered successfully" );
                return { success: true };
        } catch ( err )
        {
                console.error( "Error registering user:", err );
                return { error: "Registration failed: "+err.message };
        }
};

export const login=async ( prevState, formData ) =>
{
        const { username, password }=Object.fromEntries( formData );

        try
        {
                await signIn( "credentials", { username, password } );
                return { success: true };
        } catch ( err )
        {
                console.error( "Login error:", err );
                if ( err.message.includes( "CredentialsSignin" ) )
                {
                        return { error: "Invalid username or password" };
                }
                return { error: "Login failed: "+err.message };
        }
};