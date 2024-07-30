import React from 'react';
import Image from 'next/image';
import { handleGithubLogin } from '../../../lib/actions';
import styles from './login.module.css';

const LoginPage=() =>
{
        return (
                <div className={ styles.container }>
                        <div className={ styles.leftPanel }>
                                <h1 className={ styles.title }>Login Here!</h1>
                                <form className={ styles.form }>
                                        <div className={ styles.inputGroup }>
                                                <label htmlFor="username">User Name</label>
                                                <input type="text" id="username" name="username" required />
                                        </div>
                                        <div className={ styles.inputGroup }>
                                                <label htmlFor="password">Password</label>
                                                <input type="password" id="password" name="password" required />
                                        </div>
                                        <a href="#" className={ styles.forgotPassword }>Forget Password</a>
                                        <div className={ styles.buttonGroup }>
                                                <button type="submit" className={ styles.loginButton }>Login</button>
                                                <button type="button" className={ styles.signinButton }>Signin</button>
                                        </div>
                                </form>
                                <a href="#" className={ styles.createAccount }>Create Account</a>
                        </div>
                        <div className={ styles.rightPanel }>
                                <Image src="/agriculture.png" alt="Farm Flow Logistic" width={ 100 } height={ 100 } />
                                <h2>Farm Flow Logistic</h2>
                                <p>Admin Login</p>
                        </div>
                </div>
        );
}

export default LoginPage;