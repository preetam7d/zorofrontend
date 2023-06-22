import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Loading from '../components/Loading'; 

export default function Register() {
    const [loading, setloading] = useState(false);
    const navigate = useNavigate();
    const [register, setregister] = useState({ name: '', sellername: '', email: '', password: '' });
    const changeHandler = (e) => {
        setregister({ ...register, [e.target.name]: e.target.value });
    }
    const submitHandler = (e) => {
        e.preventDefault();
        setloading(true);
        axios.post(`http://localhost:5000/api/auth/register`, register).then(res => { alert(res.data); setloading(false); navigate('/login') }).catch(err => alert(err.response.data));
    }
    if (loading) {
        return <Loading />
    }
    return (
        <div className='register'>
            <h2 className="regishead">Sign-up</h2>
            <form className="regisform" onSubmit={submitHandler}>
                <label htmlFor="name">Name: <br />
                    <input type="text" name='name' onChange={changeHandler} autoCapitalize='off' required/>
                </label>
                <label htmlFor="name">Seller Name: <br />
                    <input type="text" name='sellername' onChange={changeHandler} autoCapitalize='off' required/>
                </label>
                <label htmlFor="name">Email: <br />
                    <input type="text" name='email' onChange={changeHandler} autoCapitalize='off' required/>
                </label>
                <label htmlFor="name">Password: <br />
                    <input type="password" name='password' onChange={changeHandler} autoCapitalize='off' required/>
                </label>
                <input className='regisbtn' type="submit" value="Register" />
            </form>
            <div className="already">Already have an account? <Link to='/login'>Sign-In</Link></div>
        </div>
    )
}
