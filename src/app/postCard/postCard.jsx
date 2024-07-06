import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './postCard.module.css';

const PostCard=( { post } ) =>
{
        return (
                <section className={ styles.container }>
                        <article className={ styles.top }>
                                <div className={ styles.imgContainer }>
                                        <Image src='/about.png' alt='' fill className={ styles.img } />
                                </div>
                                <span className={ styles.date }>10.7.24</span>
                        </article>
                        <article className={ styles.bottom }>
                                <h1 className={ styles.title }>{ post.title }</h1>
                                <p>{ post.body }</p>
                                <Link href={ `/blog/${ post.id }` } className={ styles.readmorebtn }>Read More</Link>
                        </article>
                </section>
        );
}

export default PostCard;
