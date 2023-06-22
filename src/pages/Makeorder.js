import React from 'react'
import { Link, Navigate } from 'react-router-dom'

export default function Makeorder() {
    return (
        <div className='makeorder'>
            <div className="makewrap">
                <div className="makestatus">
                    <div className={` orderbar ${localStorage.getItem('token') ? 'makesign' : ''}`}><Link className='tonotshowkin' to='/makeorder'>Sign Up</Link></div>
                    <div className="orderbar"><Link className='tonotshowkin' to='/makeshiping'>Shipping</Link></div>
                    <div className="orderbar"><Link className='tonotshowkin' to='/makepayment'>Payment</Link></div>
                    <div className="makeplace orderbar"><Link className='tonotshowkin' to='/placeorder'>Place Order</Link></div>
                </div>
            </div>
            <div className="sior">
                {localStorage.getItem('token') ? <Navigate to='/makeshiping' /> :
                    <div className="siord">You need to signup to complete an order <Link to='/login'>Sign up</Link></div>
                }
            </div>
        </div>
    )
}
