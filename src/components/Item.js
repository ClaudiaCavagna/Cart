import React from 'react';
import { BsFillTrash3Fill } from "react-icons/bs";
import { BiPlus, BiMinus } from 'react-icons/bi';

const Item = ({id, name, image, price, countInStock}) => {
  return (
    <div className='prod'>
      <div className='prod-left'>
        <img src={image} alt={name} className='prod-img'/>
        <div className='prod-description'>
          <h5>{name}</h5>
          <hr/>
          <p>{price}€</p>
        </div>
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
        <button className='btn-delete'>
          <BsFillTrash3Fill />
        </button>
    </div>
  )
}

export default Item
