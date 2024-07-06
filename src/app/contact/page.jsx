'use client'

import dynamic from 'next/dynamic';
import styles from './contact.module.css';
import Image from 'next/image';

// Dynamically import the HydrationTest component
const HydrationTestNOSSR=dynamic( () => import( '../../components/hydrationTest' ), { ssr: false } );

const ContactPage=() =>
{
        return (
                <section className={ styles.container }>
                        <article className={ styles.imgContainer }>
                                <Image src='/contact.png' alt='about' fill className={ styles.img } />
                        </article>
                        <article className={ styles.formContainer }>
                                <HydrationTestNOSSR />
                                <form className={ styles.contactForm }>
                                        <input type='text' placeholder='Name And Surname' required />
                                        <input type='email' placeholder='Email' required />
                                        <input type='tel' placeholder='Phone Number' />
                                        <textarea rows={ 10 } cols={ 30 } placeholder='Message'></textarea>
                                        <button type='submit'>Send</button>
                                </form>
                        </article>
                </section>
        );
}

export default ContactPage;
