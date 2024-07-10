import { UserModel, PostModel } from './model';
import { connectToDB } from './utils';
import { unstable_noStore as noStore } from 'next/cache';
const getPosts=async () =>
{
        try
        {
                await connectToDB();
                const posts=await PostModel.find();
                return posts;
        } catch ( err )
        {
                throw new Error( "Failed To Load The Posts: "+err );
        }
};

const getPost=async ( { slug } ) =>
{
        try
        {
                await connectToDB();
                const post=await PostModel.findOne( { slug } );
                return post;
        } catch ( err )
        {
                throw new Error( "Failed To Load The Post: "+err );
        }
};


const getUser=async ( { id } ) =>
{
        try
        {
                await connectToDB();
                const user=await UserModel.findById( id );
                return user;
        } catch ( err )
        {
                throw new Error( "Failed To Load The User: "+err );
        }
};

const getAllUsers=async () =>
{
        try
        {
                await connectToDB();
                const users=await UserModel.find();
                return users;
        } catch ( err )
        {
                throw new Error( "Failed To Load The Users: "+err );
        }
};
export { getPosts, getPost, getAllUsers, getUser };


