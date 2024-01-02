import React from 'react';
import { MdRemoveShoppingCart } from "react-icons/md";
import Item from './Item';
// import products from '../products';
import { useGlobalContext } from '../context/context';

const Cart = () => {
  const { products, deleteAll } = useGlobalContext();

  return (
    <section className='d-flex justify-content-center'>
      <table className="table text-center mt-2">
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Name</th>
            <th scope="col">Qty</th>
            <th scope="col">Price</th>
            <th scope="col">
              <MdRemoveShoppingCart style={{color: 'darkred'}} onClick={deleteAll}/>
            </th>
          </tr>
        </thead>
        <tbody>
        {products.map((el) => {
          return <Item key={el._id} {...el} />
        })}
        </tbody>
      </table>
    </section>
    
  )
}

export default Cart
