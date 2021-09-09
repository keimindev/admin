import React, {useState, useContext} from 'react'
import { login } from '../../context/authContext/apiCalls';
import { AuthContext } from '../../context/authContext/AuthContext';
import './login.css'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {isFetching, dispatch} = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        login({email, password}, dispatch);
    }

    return (
        <div>
            <div className="login">
            <form className="login-form">
                <input 
                type="text" 
                placeholder="email" 
                className="login-input"
                onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                type="password" 
                placeholder="password" 
                className="login-input"
                onChange={(e) => setPassword(e.target.value)}
                />
                <button 
                type="button" 
                className="login-btn"
                onClick = {handleLogin} 
                disabled={isFetching}
                >Log In</button>
            </form>
            </div>
        </div>
    )
}


export default Login

