'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './links.module.css';
import NavLink from './navLink/navLink';

const Links=() =>
{
        const links=[
                { title: "Home", path: "/" },
                { title: "About", path: "/about" },
                { title: "Contact", path: "/contact" },
                { title: "Blog", path: "/blog" }
        ];

        const [ open, setOpen ]=useState( false );
        const session=true;  // Temporary session state
        const isAdmin=true;  // Temporary admin state

        return (
                <div className={ styles.container }>
                        <div className={ styles.links }>
                                { links.map( link => (
                                        <NavLink item={ link } key={ link.title } />
                                ) ) }
                                { session? (
                                        <>
                                                { isAdmin&&<NavLink item={ { title: 'Admin', path: '/admin' } } /> }
                                                <NavLink item={ { title: 'Logout', path: '/logout' } } />
                                        </>
                                ):(
                                        <button className={ styles.submit_btn }>Login</button>
                                ) }
                        </div>
                        <button className={styles.menu__button} onClick={ () => setOpen( prev => !prev ) }>Menu</button>
                        { open&&(
                                <div className={ styles.mobile_links }>
                                        { links.map( link => (
                                                <NavLink item={ link } key={ link.title } />
                                        ) ) }
                                </div>
                        ) }
                </div>
        );
};

export default Links;
