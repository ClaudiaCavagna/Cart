import React from 'react';
import { MdDelete } from 'react-icons/md';
import { BiPlus, BiMinus } from 'react-icons/bi';

const Item = ({id, name, image, price, countInStock}) => {
  return (
    <div className='item'>
      <img src={image} alt={name} className='prod-img'/>
      <div className='prod-description'>
        <h5>{name}</h5>
        <hr/>
        <p>{price}€</p>
      </div>
      <div className='prod-qty'>
        <button>
          <BiPlus />
        </button>
        <p>1</p>
        <button>
          <BiMinus />
        </button>
      </div>
      <button>
        <MdDelete />
      </button>
    </div>
  )
}

export default Item
