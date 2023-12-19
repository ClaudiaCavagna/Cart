import React from 'react';
import { HiShoppingCart } from 'react-icons/hi';

const Navbar = () => {
  return (
    <div className='nav'>
        <header className='nav-section'>
            <h4>Shoppy</h4>
        </header>
        <button className='btn-nav'>
            <HiShoppingCart className='nav-icon' />
            <div className='cart-counter'>5</div>
        </button>
    </div>
  )
}

export default Navbar
