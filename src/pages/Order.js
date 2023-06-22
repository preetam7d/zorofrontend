import React from 'react';
import { useOrderdata, useCartdata, useCountdata } from '../components/Context';
import { Link } from 'react-router-dom';

export default function Order() {
    const { orderdata, setorderdata } = useOrderdata();
    const { cart, dispatch } = useCartdata();
    const { count, setcount } = useCountdata();
    return (
        <div className='order'>
            <div className="plcord">
                <h2 className='orderid'>Order {orderdata._id}</h2>
                <div className="shippingplace">
                    <h3 className="plcshihead">Shipping</h3>
                    <div className="shiplaname"><b>Name: </b>{orderdata.shipping.fullname}</div>
                    <div className="shiplaaddress"><b>Address: </b>{orderdata.shipping.address}</div>
                </div>
                <div className="payplc">
                    <h3 className="payplchead">Payment</h3>
                    <div className="payplacmed"><b>Method:</b> {orderdata.payment}</div>
                </div>
                <div className="cartplc">
                    <h3 className="cartplchead">Items</h3>
                    <div className="cartplcitems">
                        <div className="cartimgdiv">
                            <img src={cart.image} alt="cart" width={55} height={85} />
                        </div>
                        <div className="carttitlediv">
                            <span className="cartplctitle">{cart.title}</span>
                        </div>
                        <div className="cartcountdiv">{count}</div>
                        <div className="cartplcpri">$ {cart.price * count}</div>
                    </div>
                </div>
                <div className="ordsumplc ordsumext">
                    <h3 className="ordsumhead">Order Summery</h3>
                    <div className="ordsumitems"><b>Items:</b> $ {cart.price * count}</div>
                    <div className="ordsumship"><b>Shipping: </b>$ 0</div>
                    <div className="ordsumtotal"><b>Total: </b> $ {cart.price * count}</div>
                    <div className="contisho"><Link className='conshopbtn' to='/' >Continoue Shoping</Link></div>
                </div>
            </div>
        </div>
    )
}
