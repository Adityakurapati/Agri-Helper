import LoginForm from '@/components/loginForm/loginForm';
import { handleGithubLogin } from '../../../lib/actions';
import styles from './login.module.css';
const LoginPage=async () =>
{
        return (

                <div className={ styles.container }>
                        <div className={ styles.wrapper }>
                                <LoginForm />
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

