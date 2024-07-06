'use client'

import React, { useEffect, useState } from 'react';
import PostCard from '../postCard/postCard';
import styles from './blog.module.css';
import { getPosts } from '@/lib/data';

const BlogPage=( { searchParams } ) =>
{
        const [ posts, setPosts ]=useState( [] );
        const [ loading, setLoading ]=useState( true );
        const [ error, setError ]=useState( null );

        useEffect( () =>
        {
                const fetchPosts=async () =>
                {
                        try
                        {
                                const posts=await getPosts();
                                setPosts( posts );
                        } catch ( error )
                        {
                                setError( "Failed to load posts" );
                        } finally
                        {
                                setLoading( false );
                        }
                };

                fetchPosts();
        }, [] );

        if ( loading )
        {
                return <div>Loading...</div>;
        }

        if ( error )
        {
                return <div>{ error }</div>;
        }

        return (
                <section className={ styles.container }>
                        { posts.map( post => (
                                <div className={ styles.post } key={ post.id }>
                                        <PostCard post={ post } />
                                </div>
                        ) ) }
                </section>
        );
};

export default BlogPage;
