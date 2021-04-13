import React, {useState} from 'react'
import loginImage from '../../assets/images/career.svg'
import {Link} from 'react-router-dom'
import './Auth.scss'
import AuthService from '../../services/authService'
import axios from 'axios'

import {login} from '../../store/actions/auth'
import { useDispatch } from 'react-redux'

const Login = ({history}) => {

    const [email, setEmail] = useState('john.doe@gmail.com')
    const [password, setPassword] = useState('secret')
    const dispatch = useDispatch()

    const submitForm = (e) => {
        e.preventDefault()

        dispatch(login({email, password}, history))
    }
     return (
         <div id='auth-container'>
            <div id = 'auth-card'>
                <div className='card-shadow'>
                    <div id='image-section'>
                        <img src={loginImage} alt="Login"/>
                    </div>

                    <div id='form-section'>
                        <h2>Welcome back</h2>
                    
                        <form onSubmit={submitForm}>
                            <div className="input-field">
                                <input onChange={e => setEmail(e.target.value)} value={email} placeholder='Email' required="required" type="text"/>
                            </div>
                            <div className="input-field">
                                <input onChange={e => setPassword(e.target.value)} value={password} required="required" type="text" placeholder='Password'/ >
                            </div>

                            <button>LOGIN</button>
                        </form>

                        <p>Don't have an account? <Link to='/register'>Register</Link></p>
                    </div>
                </div>
            </div>
         </div>
     );
}

export default Login;