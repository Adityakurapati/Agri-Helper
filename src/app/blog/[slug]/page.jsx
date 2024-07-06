'use client'
import React, { Suspense, useEffect, useState } from 'react';
import styles from './singlepost.module.css';
import Image from 'next/image';
import PostUser from '@/components/postUser/postUser';
import { getPost } from '@/lib/data';

const SinglePostPage=( { params } ) =>
{
        const { slug }=params;
        const [ posts, setPosts ]=useState( [] );
        const [ loading, setLoading ]=useState( true );
        const [ error, setError ]=useState( null );

        useEffect( async () =>
        {
                const post=await getPost( slug );
                setPosts( post )
                setLoading( false )
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
