/*ID client =99282516978-8tekktfacq2fq41v6kqrtcbfu3bck8dh.apps.googleusercontent.com*/
import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './Login.css'
import {GoogleLogin} from 'react-google-login'
import {useDispatch} from 'react-redux'
import {logIn} from '../../redux/reducers/authSlice'
import {useHistory} from 'react-router-dom'
import {useMutation} from '@apollo/client'
import {ADD_USER} from '../../lib/queries'

export default function Login() {

    const dispatch = useDispatch();
    const history = useHistory();

    const dataLogin = {
        username: '',
        password: ''
    };

    const [values, setvalues] = useState(dataLogin);
    const {username, password} = values;
    const [mutate, loading] = useMutation(ADD_USER);

    const onchangeHandler = e => {
    }
    const loginSubmit = () => {

    }

    const responseGoogle = response => {
        dispatch(logIn(response.profileObj));
        mutate({
            variables: {
                firstName: response.profileObj.givenName,
                lastName: response.profileObj.familyName,
                email: response.profileObj.email,
                imageProfileUrl: response.profileObj.imageUrl,
                googleId: response.profileObj.googleId
            }
        })
    }
    console.log(mutate);

    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm" onSubmit={loginSubmit}>
                <label>Username</label>
                <input
                type="text"
                className="loginInput"
                placeholder="Enter your username..."
                autoComplete="username"
                name="username"
                value={username}
                onChange={onchangeHandler}
                />
                <label>Password</label>
                <input
                type="password"
                className="loginInput"
                placeholder="Enter your password..."
                autoComplete="current-password"
                name="password"
                value={password}
                onChange={onchangeHandler}
                />
                <button className="loginButton" type="submit" disabled="">
                Login
                </button>
            </form>
            <button className="loginRegisterButton">
                <Link className="link" to="/register">
                Register
                </Link>
            </button>
            <div style={{marginTop: '30px'}}>
                <GoogleLogin
                    clientId="99282516978-8tekktfacq2fq41v6kqrtcbfu3bck8dh.apps.googleusercontent.com"
                    buttonText="Se connecter avec Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                    theme= "dark"
                />
            </div>
        </div>
    )
}
