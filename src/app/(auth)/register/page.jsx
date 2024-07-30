import React from 'react';
import Image from 'next/image';
import styles from './register.module.css';

const SignupPage=() =>
{
        return (
                <div className={ styles.container }>
                        <div className={ styles.leftPanel }>
                                <Image src="/agriculture.png" alt="Farm Flow Logistic" width={ 100 } height={ 100 } />
                                <h2>Farm Flow Logistic</h2>
                                <p>Create Your Account</p>
                        </div>
                        <div className={ styles.rightPanel }>
                                <h1 className={ styles.title }>Sign Up Here!</h1>
                                <form className={ styles.form }>
                                        <div className={ styles.inputGroup }>
                                                <label htmlFor="fullname">Full Name</label>
                                                <input type="text" id="fullname" name="fullname" required />
                                        </div>
                                        <div className={ styles.inputGroup }>
                                                <label htmlFor="email">Email</label>
                                                <input type="email" id="email" name="email" required />
                                        </div>
                                        <div className={ styles.inputGroup }>
                                                <label htmlFor="password">Password</label>
                                                <input type="password" id="password" name="password" required />
                                        </div>
                                        <div className={ styles.inputGroup }>
                                                <label htmlFor="confirmPassword">Confirm Password</label>
                                                <input type="password" id="confirmPassword" name="confirmPassword" required />
                                        </div>
                                        <div className={ styles.buttonGroup }>
                                                <button type="submit" className={ styles.signupButton }>Sign Up</button>
                                        </div>
                                </form>
                                <p className={ styles.loginLink }>Already have an account? <a href="/login">Login</a></p>
                        </div>
                </div>
        );
}

export default SignupPage;