'use client'

import React, { useEffect, useState } from 'react';
import PostCard from '../postCard/postCard';
import styles from './blog.module.css';

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
                                const res=await fetch( 'https://jsonplaceholder.typicode.com/posts', { next: { revalidate: 3600 } } );
                                if ( !res.ok )
                                {
                                        throw new Error( "Server Load Error" );
                                }
                                const data=await res.json();
                                setPosts( data );
                                setLoading( false );
                        } catch ( err )
                        {
                                setError( err.message );
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
