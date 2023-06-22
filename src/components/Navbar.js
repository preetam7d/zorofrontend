import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { AiOutlineUser } from 'react-icons/ai';
import { BsList } from 'react-icons/bs';

export default function Navbar() {
    return (
        <div className='navbar'>
            <div className="logo"><h2 className="logotxt"><Link className='logolink' to='/' >Zoro</Link></h2></div>
            <div className="nav">
                <nav>
                    <ul className="navlist">
                        <li className="navitem">
                            <Link className='menulink' to='/cart' >
                            <FaShoppingCart />
                                <span>cart</span>
                            </Link>
                        </li>
                        <li className="navitem">
                            <Link className='menulink' to='/profile' >
                            <AiOutlineUser />
                <span>Profile</span>
                            </Link>
                        </li>
                        <li className="navitem">
                            <Link className='menulink' to='/orders' >
                            <BsList />
                <span>Orders</span>
                            </Link>
                        </li>
                        <li className="navitem">
                            <Link className='menulink' to='/adminlogin' >
                            <BsList />
                <span>Admin</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
