import { handleGithubLogin } from '../../../lib/actions';
import styles from './login.module.css';
import { login } from '../../../lib/actions';
const LoginPage=async () =>
{
        return (

                <div className={ styles.container }>
                        <div className={ styles.wrapper }>
                                <form action={ login } className={ styles.form }>
                                        <input type="text" className={ styles.input } name="username" placeholder="Username" />
                                        <input type="password" className={ styles.input } name="password" placeholder="Password" />
                                        <button>Login</button>
                                </form>
                                <div className={ styles.socials }>
                                        <form action={ handleGithubLogin }>
                                                <button type="submit">Login With Github</button>
                                        </form>
                                </div>
                        </div>
                </div>
        )
}


export default LoginPage

