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

export const deleteUser=async ( formData ) =>
{
        const { id }=formData;

        try
        {
                connectToDB();
                await UserModel.deleteOne( { id } );
                console.log( "USer Got Deleted " )
                revalidatePath( '/admin' )  //to fetch users after delete 
        }
}

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
        const { username, email, password, img, passwordRepeat }=
                Object.fromEntries( formData );

        if ( password!==passwordRepeat )
        {
                return { error: "Passwords do not match" };
        }

        try
        {
                connectToDB();

                const user=await UserModel.findOne( { username } );

                if ( user )
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
                console.log( "saved to db" );

                return { success: true };
        } catch ( err )
        {
                console.log( err );
                return { error: "Something went wrong!"+err };
        }
};

export const login=async ( prevState, formData ) =>
{
        const { username, password }=Object.fromEntries( formData );

        try
        {
                await signIn( "credentials", { username, password } );
        } catch ( err )
        {
                console.log( err );

                if ( err.message.includes( "CredentialsSignin" ) )
                {
                        return { error: "Invalid username or password" };
                }
                throw err;
        }
};