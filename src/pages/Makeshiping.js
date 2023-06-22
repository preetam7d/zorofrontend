 import React, { useState } from 'react';
 import { Link, useNavigate } from 'react-router-dom';
import { useShipingdata } from '../components/Context';

export default function Makeshiping() {
    const navigate = useNavigate();
    const { shippings, shipdispatch } = useShipingdata();
    const [shipping, setshipping] = useState({ fullname: '', address: '', city: '', postalcode: '', country: '' });
    const changeHandler = (e) => {
        setshipping({ ...shipping, [e.target.name]: e.target.value });
    }
    const SubmitHandler = (e) => {
        e.preventDefault();
        shipdispatch({ type: 'shipping', payload: shipping });
        return navigate('/makepayment')
    }
    return (
        <div className='makeshiping'>
            <div className="makewrap">
                <div className="makestatus">
                    <div className={` orderbar ${localStorage.getItem('token') ? 'makesign' : ''}`}><Link className='tonotshowkin' to='/makeorder'>Sign Up</Link></div>
                    <div className="orderbar"><Link  className='tonotshowkin' to='/makeshiping'>Shipping</Link></div> 
                    <div className="orderbar"><Link  className='tonotshowkin' to='/makepayment'>Payment</Link></div>
                    <div className="makeplace orderbar"><Link  className='tonotshowkin' to='/placeorder'>Place Order</Link></div>
                </div> 
            </div>
            <div className="shipingform">
                <form className='shipform' onSubmit={SubmitHandler}>
                    <label htmlFor="fullname">Fullname : <br />
                        <input type="text" name='fullname' required autoComplete='off' onChange={changeHandler} />
                    </label>
                    <label htmlFor="fullname">Address : <br />
                        <input type="text" name='address' required autoComplete='off' onChange={changeHandler} />
                    </label>
                    <label htmlFor="fullname">City : <br />
                        <input type="text" name='city' required autoComplete='off' onChange={changeHandler} />
                    </label>
                    <label htmlFor="fullname">Postal Code : <br />
                        <input type="text" name='postalcode' required autoComplete='off' onChange={changeHandler} />
                    </label>
                    <label htmlFor="fullname">Country : <br />
                        <input type="text" name='country' required autoComplete='off' onChange={changeHandler} />
                    </label>
                    <input className='savead' type="submit" value="Save Address" />
                </form>
            </div>
        </div>
    )
}
