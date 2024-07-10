import { handleGithubLogin } from '../../../lib/actions';

const LoginPage=async () =>
{
        return (
                <div>
                        <form action={ handleGithubLogin }>
                                <button type="submit">Login With Github</button>
                        </form>
                </div>
        )
}

export default LoginPage
