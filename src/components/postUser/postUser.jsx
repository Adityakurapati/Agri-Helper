'use client'

import React, { useEffect, useState } from 'react';
import styles from './postUser.module.css'; // Ensure the CSS module file exists
import { getUser } from '@/lib/data';

const PostUser=( { userId } ) =>
{
        const [ user, setUser ]=useState( null );
        const [ loading, setLoading ]=useState( true );
        const [ error, setError ]=useState( null );

        useEffect( () =>
        {
                const fetchUser=async () =>
                {
                        try
                        {
                                const user=await getUser( { id: userId } );
                                setUser( user );
                        } catch ( error )
                        {
                                setError( "Failed to load user" );
                        } finally
                        {
                                setLoading( false );
                        }
                };

                fetchUser();
        }, [ userId ] );

        if ( loading )
        {
                return <div>Loading...</div>;
        }

        if ( error )
        {
                return <div>{ error }</div>;
        }

        if ( !user )
        {
                return <div>User not found</div>;
        }

        return (
                <div className={ styles.detailedText }>
                        <span className={ styles.detailTitle }>Author</span>
                        <span className={ styles.detailValue }>{ user.name }</span>
                </div>
        );
}

export default PostUser;
