import React from 'react';
import { useGlobalContext } from '../context/context';
import formatNum from '../utils/formatNum';

const TotalBar = () => {
  const {total} = useGlobalContext();
  return (
    <section className='d-flex mx-2 justify-content-center'>
      <div className='card text-center'>
        <h5>Your total</h5>
        <h6>{formatNum(total)}</h6>
        <button type='button' className='btn mt-3'>Checkout</button>
      </div>
    </section>
  )
}

export default TotalBar
