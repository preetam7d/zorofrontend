import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Loading from '../components/Loading';

export default function Login() {
    const navigate = useNavigate();
    const [loading, setloading] = useState(false);
    const [login, setlogin] = useState({ email: '', password: '' });
    const changeHandler = (e) => {
        setlogin({ ...login, [e.target.name]: e.target.value });
    }
    const submitHandler = (e) => {
        e.preventDefault();
        setloading(true);
        axios.post('http://localhost:5000/api/auth/login', login).then(res => { localStorage.setItem('token', res.data.token); setloading(false); navigate('/') }).catch(err => alert(err.response.data));
    }
    if (loading) {
        return <Loading />
    }
    return (
        <div className='login'>
            <h2 className="loghead">Sign-In</h2>
            <form onSubmit={submitHandler} className="loginform">
                <label htmlFor="email">Email: <br />
                    <input type="text" name='email' onChange={changeHandler} required autoComplete='off' />
                </label>
                <label htmlFor="password">Password: <br />
                    <input type="password" name='password' onChange={changeHandler} required />
                </label>
                <input className='logmainbtn' type="submit" value="Login" />
            </form>
            <div className="createanact">New coustomer? <Link to='/register'>Sign-up</Link> </div>
        </div>
    )
}
