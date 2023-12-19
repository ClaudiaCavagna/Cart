import React from 'react';
import products from '../products';
import { MdRemoveShoppingCart } from 'react-icons/md';
import Item from './Item';

const Cart = () => {
  return (
    <section className='prod-section'>
      {products.map(el => {
        return (
          <div>
          <Item key={el.id} {...el} />
          </div>

          
        )
        
      })}
      

    </section>


  )
}

export default Cart
