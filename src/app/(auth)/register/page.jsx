import styles from './register.module.css';
import { registerUser } from '../../../lib/actions';

const RegisterPage=() =>
{
        return (
                <div className={ styles.container }>
                        <div className={ styles.wrapper }>
                                <form action={ registerUser } className={ styles.form }>
                                        <input type="text" className={ styles.input } name="username" placeholder="Username" />
                                        <input type="text" className={ styles.input } name="email" placeholder="Email" />
                                        <input type="password" className={ styles.input } name="password" placeholder="Password" />
                                        <input type="password" className={ styles.input } name="repeatPassword" placeholder="Repeat Password" />
                                        <button>Register</button>
                                </form>
                        </div>
                </div>
        );
};

export default RegisterPage;