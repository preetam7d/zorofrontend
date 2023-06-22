import React, { useReducer } from 'react';
import { Link } from 'react-router-dom';

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const reducer = (state, action) => {
  switch (action.type) {
    case 'allproducts':
      return action.payload;
    case 'men':
      return state ? state.filter(category => category.category === 'men') : [];
    case 'women':
      return state ? state.filter(category => category.category === 'women') : [];
    default:
      return state;
  }
};


function Footer({ produ }) {
  const [state, dispatch] = useReducer(reducer, produ);

  const allCategory = () => {
    dispatch({ type: 'allproducts', payload: produ });
  };
  const men = () => {
    dispatch({ type: 'men', payload: produ });
  };
  const women = () => {
    dispatch({ type: 'women', payload: produ });
  };

  return (
    <div className='footer-container'>
      <div className='footer-section'>
        <h3>About Us</h3>
        <p>
          Zoro is an online shopping platform that offers a wide range of
          products from various categories, including fashion, electronics, home
          appliances, and more. Our mission is to provide our customers with the
          best shopping experience possible by offering quality products at
          affordable prices and exceptional customer service.
        </p>
      </div>
      <div className='footer-section'>
        <h3>Product Categories</h3>
        <ul className='footer-list'>
          <li className='navitem forcou' onClick={allCategory}>
            All Products
          </li>
          <li className='navitem forcou' onClick={men}>
            Men
          </li>
          <li className='navitem forcou' onClick={women}>
            Women
          </li>
        </ul>
      </div>
      <div className='footer-section'>
        <h3>Follow Us</h3>
        <div className='social-icons'>
          <a href='#'>
            <FaFacebookF />
          </a>
          <a href='#'>
            <FaTwitter />
          </a>
          <a href='#'>
            <FaInstagram />
          </a>
          <a href='#'>
            <FaLinkedinIn />
          </a>
        </div>
      </div>
      <div className='footer-section'>
        <h3>Contact Us</h3>
        <ul className='footer-list'>
          <li>Email: example@example.com</li>
          <li>Phone: (123) 456-7890</li>
          <li>Address: 123 Main St, Anytown USA</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
