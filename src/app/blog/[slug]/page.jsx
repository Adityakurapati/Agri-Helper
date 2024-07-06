'use client'
import React, { Suspense, useEffect, useState } from 'react';
import styles from './singlepost.module.css';
import Image from 'next/image';
import PostUser from '@/components/postUser/postUser';

const SinglePostPage=( { params } ) =>
{
        const { slug }=params;
        const [ posts, setPosts ]=useState( [] );
        const [ loading, setLoading ]=useState( true );
        const [ error, setError ]=useState( null );

        useEffect( () =>
        {
                const fetchPosts=async () =>
                {
                        try
                        {
                                const res=await fetch( `https://jsonplaceholder.typicode.com/posts/${ slug }`, );
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
                        <article className={ styles.imgContainer }>
                                <Image src='/about.png' alt='About image' fill className={ styles.img } />
                        </article>
                        <article className={ styles.textContainer }>
                                <h1 className={ styles.title }>{ posts.title }</h1>
                                <div className={ styles.detail }>
                                        <Image src='/about.png' alt='User image' width={ 50 } height={ 50 } className={ styles.userimg } />
                                        <Suspense fallback={ <div>Loading </div> }>
                                                <PostUser userId={ posts.userId } />
                                        </Suspense>
                                        <div className={ styles.detailedText }>
                                                <span className={ styles.detailedTitle }>Published</span>
                                                <span className={ styles.detailedValue }>12.34.2024</span>
                                        </div>
                                </div>
                                <p>{ posts.body }</p>
                        </article>
                </section>
        );
};

export default SinglePostPage;
