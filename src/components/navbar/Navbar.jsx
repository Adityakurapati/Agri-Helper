'use client'
import React from 'react';
import Links from './links/Links';
import styles from './navbar.module.css'; // Importing CSS module
import Link from 'next/link';
import { auth } from '../../lib/auth'
const Navbar=async () =>
{
        const session=await auth();
        console.log( session )
        return (
                <div className={ styles.container }>
                        <Link href='/' >Blog8</Link>
                        <div>
                                <Links session={ session } />
                        </div>
                </div>
        );
};

export default Navbar;
