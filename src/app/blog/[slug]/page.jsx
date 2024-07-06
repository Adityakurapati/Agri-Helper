import React from 'react';
import styles from './singlepost.module.css';
import Image from 'next/image';

const SinglePostPage=() =>
{
        return (
                <section className={ styles.container }>
                        <article className={ styles.imgContainer }>
                                <Image src='/about.png' alt='About image' fill className={ styles.img } />
                        </article>
                        <article className={ styles.textContainer }>
                                <h1 className={ styles.title }>title</h1>
                                <div className={ styles.detail }>
                                        <Image src='/about.png' alt='User image' width={ 50 } height={ 50 } className={ styles.userimg } />
                                        <div className={ styles.detailedText }>
                                                <span className={ styles.detailTitle }>Author</span>
                                                <span className={ styles.detailValue }>Raman</span>
                                        </div>
                                        <div className={ styles.detailedText }>
                                                <span className={ styles.detailedTitle }>Published</span>
                                                <span className={ styles.detailedValue }>12.34.2024</span>
                                        </div>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam natus voluptate vero laudantium ad optio qui sequi praesentium doloribus, expedita porro quos corporis.</p>
                        </article>
                </section>
        );
};

export default SinglePostPage;
