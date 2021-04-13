import React, {useState} from 'react'
import registerImage from '../../assets/images/growth.svg'
import {useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {register} from '../../store/actions/auth'

import './Auth.scss'
const Register = ({history}) => {

    const [formData, setFormData] = useState({
        email: '',
        password: '',

        firstName: '',
        lastName: '',
        gender: ''
    });

    const dispatch = useDispatch()
    const onChangeCustom = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const { email, password, firstName, lastName, gender } = formData;

    
    const submitForm = (e) => {
        e.preventDefault()

        dispatch(register({email, password, firstName, lastName, gender}, history))
    }

     return (
         <div id='auth-container'>
            <div id = 'auth-card'>
                <div className='card-shadow'>
                    <div id='image-section'>
                        <img src={registerImage} alt="Register"/>
                    </div>

                    <div id='form-section'>
                        <h2>Create an account</h2>
                    
                        <form onSubmit = {submitForm}> 

                            <div className="input-field mb-1">
                            <input type="email" placeholder="Email Address" name="email" value={ email } onChange={e => onChangeCustom(e)} required/>
                          
                            </div>
                            <div className="input-field mb-1">
                            <input
                                type="password"
                                placeholder="Password"
                                name="password"
                                minLength="6"
                                value={password}
                                onChange={e => onChangeCustom(e)}
                                required
                            />
                            </div>

                            <div className="input-field mb-1">
                                <input type="text" placeholder="Name" name="firstName" required value={ firstName }  onChange={e => onChangeCustom(e)} required/>
                            </div>

                            <div className="input-field mb-1">
                                <input type="text" placeholder="Name" name="lastName" required value={ lastName }  onChange={e => onChangeCustom(e)} required/>
                            </div>
            
                            <div className="input-field mb-2">
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