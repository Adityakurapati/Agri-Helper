'use client'

import React, { useEffect, useState } from 'react';
import Links from './links/Links';
import styles from './navbar.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar=( { session } ) =>
{
        const [ isHome, setIsHome ]=useState( false );
        const [ isLogin, setIsLogin ]=useState( false );
        const pathname=usePathname();

        useEffect( () =>
        {
                setIsHome( pathname==='/' );
                setIsLogin( pathname==='/login'||pathname=='/register' );

                // Set body background
                if ( pathname==='/'||pathname=='/login'||pathname=='/register' )
                {
                        document.body.style.backgroundImage="url('/background.png')";
                        document.body.style.backgroundSize='cover';
                        document.body.style.backgroundPosition='center';
                } else
                {
                        document.body.style.backgroundImage='none';
                        document.body.style.backgroundColor='#013D3B';
                }
        }, [ pathname ] );

        return (
                <div className={ `${ styles.container } ${ isHome? styles.transparent:'' }  ${ isLogin? styles.hidden:"" }` }>
                        <Link href='/' style={ { marginLeft: "30px", fontSize: '25px' } }>Agri-<p style={ { color: "green", display: "inline" } }>Helper</p></Link>
                        <div>
                                <Links session={ session } />
                        </div>
                </div>
        );
};

export default Navbar;