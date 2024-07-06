import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './postCard.module.css';

const PostCard=() =>
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
                                <h1 className={ styles.title }>Title</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, quasi?</p>
                                <Link href='/blog/post' className={ styles.readmorebtn }>Read More</Link>
                        </article>
                </section>
        );
}

export default PostCard;
