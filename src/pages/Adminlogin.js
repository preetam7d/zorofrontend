import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';
import axios from 'axios';

export default function Adminlogin() {
    const navigate = useNavigate();
    const [loading, setloading] = useState(false);
    const [login, setlogin] = useState({ userid: '', password: '' });
    const changeHandler = (e) => {
        setlogin({ ...login, [e.target.name]: e.target.value });
    }
    const submitHandler = (e) => {
        e.preventDefault();
        setloading(true);
        axios.post('http://localhost:5000/api/auth/admin', login).then(res => { alert(res.data); setloading(false); navigate('/admin') }).catch(err => {alert(err.response.data); setloading(false);});
    }
    if (loading) {
        return <Loading />
    }
    return (
        <div className='login'>
            <h2 className="loghead">Admin Sign-In</h2>
            <form onSubmit={submitHandler} className="loginform">
                <label htmlFor="email">Email: <br />
                    <input type="text" name='userid' onChange={changeHandler} required autoComplete='off' />
                </label>
                <label htmlFor="password">Password: <br />
                    <input type="password" name='password' onChange={changeHandler} required />
                </label>
                <input className='logmainbtn' type="submit" value="Login" />
            </form>
        </div>
    )
}
