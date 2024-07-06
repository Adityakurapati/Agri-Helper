'use client'

import React, { useEffect, useState } from 'react';
import styles from './postUser.module.css'; // Ensure the CSS module file exists

const PostUser=( { userId } ) =>
{

        const [ user, setUser ]=useState( {} );
        const [ loading, setLoading ]=useState( true );
        const [ error, setError ]=useState( null );

        useEffect( () =>
        {
                const fetchPosts=async () =>
                {
                        try
                        {
                                const res=await fetch( `https://jsonplaceholder.typicode.com/users/${ userId }`, );
                                if ( !res.ok )
                                {
                                        throw new Error( "Server Load Error" );
                                }
                                const data=await res.json();
                                setUser( data );
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
                <div className={ styles.container }>
                        <span className={ styles.detailTitle }>Author</span>
                        <span className={ styles.detailValue }>{ user.name }</span>
                </div>
        );
}

export default PostUser;
