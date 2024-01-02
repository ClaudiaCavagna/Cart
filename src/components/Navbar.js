import React from 'react';
import { HiShoppingCart } from 'react-icons/hi';
import { useGlobalContext } from '../context/context';

const Navbar = () => {
  const {itemCounter} = useGlobalContext();

  return (
    <nav className="navbar nav-style">
      <div className="container-fluid justify-content-between">
        <h4 className="ms-5">Shoppy</h4>
        <div className='d-flex me-5'>
          <HiShoppingCart className='nav-icon'/>
          {itemCounter > 0 && <span className='nav-counter'>{itemCounter}</span>}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
