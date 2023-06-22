import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useShipingdata, useCartdata, usePaymentdata, useCountdata, useOrderdata } from '../components/Context';
import axios from 'axios';

export default function Placeorder() {
    const { orderdata, setorderdata } = useOrderdata();
    const navigate = useNavigate();
    const { cart, dispatch } = useCartdata();
    const { shippings, shipdispatch } = useShipingdata();
    const { payment, setpayment } = usePaymentdata();
    const { count, setcount } = useCountdata();
    const placeorder = () => {
        axios.post('http://localhost:5000/api/order', { shipping: shippings, payment: payment, items: cart._id, summery: count * cart.price }, { headers: { 'x-token': `${localStorage.getItem('token')}` } }).then(res => { setorderdata(res.data); navigate('/order') });
    }
    return (
        <div className='placeorder'>
            <div className="makestatus">
                <div className={` orderbar ${localStorage.getItem('token') ? 'makesign' : ''}`}><Link to='/makeorder'>Sign Up</Link></div>
                <div className="makshiping orderbar"><Link to='/makeshiping'>Shipping</Link></div>
                <div className="makepay orderbar"><Link to='/makepayment'>Payment</Link></div>
                <div className="makeplace orderbar">Place Order</div>
            </div>
            <h2 className="previeword">Preview Order</h2>
            <div className="plcordwrap">
                <div className="plcord">
                    <div className="shippingplace">
                        <h3 className="plcshihead">Shipping</h3>
                        <div className="shiplaname"><b>Name: </b>{shippings.fullname}</div>
                        <div className="shiplaaddress"><b>Address: </b>{shippings.address}</div>
                        <div className="shiplcedit"><Link to='/makeshiping' >Edit</Link></div>
                    </div>
                    <div className="payplc">
                        <h3 className="payplchead">Payment</h3>
                        <div className="payplacmed"><b>Method:</b> {payment}</div>
                        <div className="payplcedit"><Link to='/makepayment' >Edit</Link></div>
                    </div>
                    <div className="cartplc">
                        <h3 className="cartplchead">Items</h3>
                        <div className="cartplcitems">
                            <div className="cartimgdiv">
                                <img src={cart.image} alt="cart" width={45} height={65} />
                            </div>
                            <div className="carttitlediv">
                                <span className="cartplctitle">{cart.title}</span>
                            </div>
                            <div className="cartcountdiv">{count}</div>
                            <div className="cartplcpri">$ {cart.price * count}</div>
                        </div>
                    </div>
                </div>
                <div className="ordsumplc">
                    <h3 className="ordsumhead">Order Summery</h3>
                    <div className="ordsumitems"><b>Items:</b> $ {cart.price * count}</div>
                    <div className="ordsumship"><b>Shipping: </b>$ 0</div>
                    <div className="ordsumtotal"><b>Total: </b> $ {cart.price * count}</div>
                    <div className="ordsumbtn"><button className="ordsumbutn" onClick={placeorder}>Place order</button></div>
                </div>
            </div>
        </div>
    )
}
