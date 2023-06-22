import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Profile() {
    const [profile, setprofile] = useState([]);
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem('token');
        return navigate('/login');
    }
    const submitHandler = (e) => {
        e.preventDefault();
        axios.put('http://localhost:5000/api/user/', profile, { headers: { 'x-token': `${localStorage.getItem('token')}` } }).then(res => { setprofile(res.data); alert("profile updated sucssfully") });
    }
    const changeHandler = (e) => {
        setprofile({ ...profile, [e.target.name]: e.target.value })
    }
    useEffect(() => {
        axios.get('http://localhost:5000/api/user/', { headers: { 'x-token': `${localStorage.getItem('token')}` } }).then(res => setprofile(res.data));
    }, []);
    return (
        <div className='profile'>
            {localStorage.getItem('token') ?  <form className='proform' onSubmit={submitHandler}>
                <h2 className='profhead'>User Profile</h2>
                <label htmlFor="proname">Name: <br />
                    <input type="text" name='name' value={profile.name} onChange={changeHandler} autoComplete='off' required />
                </label>
                <label htmlFor="proname">Email: <br />
                    <input type="text" name='email' value={profile.email} onChange={changeHandler} autoComplete='off' required readOnly />
                </label>
                <label htmlFor="proname">Password: <br />
                    <input type="text" name='password' onChange={changeHandler} autoComplete='off' required />
                </label>
                <label htmlFor="proname">Confirm password: <br />
                    <input type="text" name='confirmpassword' onChange={changeHandler} autoComplete='off' required />
                </label>
                <h2 className='profsel'>Seller name</h2>
                <label htmlFor="proname">Sellername: <br />
                    <input type="text" value={profile.sellername} name='sellername' onChange={changeHandler} autoComplete='off' required />
                </label>
                <input type="submit" className='chaprobtn' value="Change Profile" />
                <div className='logout' onClick={logout}>Logout </div>
            </form> : <div className='emppro' ><span className='btnsidetext'>Sign up to fetch or update your profile details<Link className='loginbtnpro' to='/login' >Sign Up</Link></span></div>}
        </div>
    )
}
