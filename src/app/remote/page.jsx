'use client'
import React, { useState } from 'react';
import styles from './farmMonitoring.module.css'
import Image from 'next/image';

const FarmMonitoring=() =>
{
        const [ isWaterControlActive, setIsWaterControlActive ]=useState( false );

        const handleStartWaterControl=() =>
        {
                setIsWaterControlActive( true );
        };

        const handleStopWaterControl=() =>
        {
                setIsWaterControlActive( false );
        };

        return (
                <div className={ styles.container }>
                        <h1 className={ styles.title }>Farm Remote Monitoring</h1>
                        <div className={ styles.imageContainer }>
                                <Image
                                        src={ isWaterControlActive? '/agri2.png':'/agri1.png' }
                                        alt='Farm Tractor'
                                        fill
                                        className={ styles.image }
                                />
                        </div>
                        <div className={ styles.buttonContainer }>
                                <button
                                        className={ `${ styles.button } ${ styles.startButton }` }
                                        onClick={ handleStartWaterControl }
                                >
                                        Start Water Control
                                </button>
                                <button
                                        className={ `${ styles.button } ${ styles.stopButton }` }
                                        onClick={ handleStopWaterControl }
                                >
                                        Stop Water Control
                                </button>
                        </div>
                </div>
        );
};

export default FarmMonitoring;