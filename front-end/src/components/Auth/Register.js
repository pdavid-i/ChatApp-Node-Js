import React from 'react'
import registerImage from '../../assets/images/growth.svg'

import {Link} from 'react-router-dom'

import './Auth.scss'
const Register = () => {
     return (
         <div id='auth-container'>
            <div id = 'auth-card'>
                <div className='card-shadow'>
                    <div id='image-section'>
                        <img src={registerImage} alt="Register"/>
                    </div>

                    <div id='form-section'>
                        <h2>Create an account</h2>
                    
                        <form>
                            <div className="input-field mb-1">
                                <input placeholder='Email'/ >
                            </div>
                            <div className="input-field mb-2">
                                <input placeholder='Password'/ >
                            </div>
                            <div className="input-field mb-1">
                                <input placeholder='FirstName'/ >
                            </div>
                            <div className="input-field mb-1">
                                <input placeholder='LastName'/ >
                            </div>
                            <div className="input-field mb-1">
                                <select>
                                     <option value='male'>Male</option>
                                     <option value='female'>Female</option>
                                </select>
                            </div>


                            <button>LOGIN</button>
                        </form>

                        <p>Already have an account? <Link to='/login'>Login</Link></p>
                    </div>
                </div>
            </div>
         </div>
     );
}

export default Register