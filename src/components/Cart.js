import React from 'react';
import products from '../products';
import { MdRemoveShoppingCart } from 'react-icons/md';

const Cart = () => {
  return (
    <section className='prod-section'>
    {products.map((el) => {
      return (
        <div key={el.id} className='prod'>
          <img src={el.image} alt={el.name} className='prod-img'/>
          <div className='prod-description'>
            <h5>{el.name}</h5>
            <hr/>
            <p>{el.price}</p>
          </div>
          <div className='prod-'>
            <select name='q.ty' id='qty'>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10+">10+</option>
            </select>
            <MdRemoveShoppingCart className='cart-icon'/>
          </div>
        </div>
      )

    })}
    </section>


  )
}

export default Cart
