import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { usePaymentdata } from '../components/Context';

export default function Makepayment() {
    const { payment, setpayment } = usePaymentdata();
    const navigate = useNavigate();
    const [pay, setpay] = useState('');
    const changeHandler = (e) => {
        setpay(e.target.value);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        setpayment(pay);
        return navigate('/placeorder');
    }
    return (
        <div className='makepayment'>
            <div>
                <div className="makestatus">
                    <div className={` orderbar ${localStorage.getItem('token') ? 'makesign' : ''}`}><Link className='tonotshowkin' to='/makeorder'>Sign Up</Link></div>
                    <div className="makshiping orderbar"><Link className='tonotshowkin' to='/makeshiping'>Shipping</Link></div>
                    <div className="orderbar">Payment</div>
                    <div className="makeplace orderbar"><Link className='tonotshowkin' to='/placeorder'>Place Order</Link></div>
                </div>
                <div className="paymentmethods">
                    <h2 className="meth">Payment Method</h2>
                    <form onSubmit={submitHandler}>
                        <input type="radio" name="payment" id="payment" onChange={changeHandler} value='Paypal' required />
                        Paypal <br />
                        <input type="radio" name="payment" id="payment" onChange={changeHandler} value='Stripe' required />
                        Stripe <br />
                        <input className='paycon' type="submit" value="Continue" />
                    </form>
                </div>
            </div>
        </div>
    )
}
