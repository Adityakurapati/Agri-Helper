import React, { Suspense } from 'react';
import styles from './singlepost.module.css';
import Image from 'next/image';
import PostUser from '@/components/postUser/postUser';
import { getPost } from '../../../lib/data';

export const generateMetadata=async ( { params } ) =>
{
        const { slug }=params;
        conts post=await getPost( { slug } );
        return {
                title: post.title,
                description: post.desc
        }
}
const SinglePostPage=async ( { params } ) =>
{
        const { slug }=params;

        const post=await getPost( { slug } );

        if ( !post )
        {
                return <div>Post not found</div>;
        }

        return (
                <section className={ styles.container }>
                        <article className={ styles.imgContainer }>
                                <Image src='/post1.jpg' alt='About image' fill className={ styles.img } />
                        </article>
                        <article className={ styles.textContainer }>
                                <h1 className={ styles.title }>{ post.title }</h1>
                                <div className={ styles.detail }>
                                        <Image src={ post.img } alt='User image' width={ 50 } height={ 50 } className={ styles.userimg } />
                                        <Suspense fallback={ <div>Loading...</div> }>
                                                <PostUser userId={ post.userId } />
                                        </Suspense>
                                        <div className={ styles.detailedText }>
                                                <span className={ styles.detailedTitle }>Published</span>
                                                <span className={ styles.detailedValue }>{ post.createdAt.toString().slice( 0, 16 ) }</span>
                                        </div>
                                </div>
                                <p>{ post.desc }</p>
                        </article>
                </section>
        );
};

export default SinglePostPage;
