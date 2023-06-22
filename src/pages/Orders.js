import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';

export default function Orders() {
    const [loading, setloading] = useState(false);
    const [orders, setorders] = useState([]);
    useEffect(() => {
        setloading(true);
        axios.get('http://localhost:5000/api/order', { headers: { 'x-token': `${localStorage.getItem('token')}` } }).then(res => {setorders(res.data); setloading(false);})
    }, []);
    if (loading) {
        return <Loading />
    }
    return (
        <div className='orders'>
            {orders.length > 0 ? <table>
                <tr className='headtr'>
                    <th>Id</th>
                    <th>Time</th>
                    <th>Total</th>
                    <th>Paid</th>
                    <th>Delivered</th>
                    <th>Payment</th>
                </tr>
                {orders.length > 0 && orders.map(order => {
                    return (
                        <tr key={order._id}>
                            <td>{order._id}</td>
                            <td>{order.createdAt}</td>
                            <td>${order.summery}</td>
                            <td>No</td>
                            <td>No</td>
                            <td>{order.payment}</td>
                        </tr>
                    )
                })}
            </table> : <div className='norders'>You have not ordered anything yet. <Link className='ordercontbtn' to='/'>Keep shoping</Link></div>}
        </div>
    )
}
