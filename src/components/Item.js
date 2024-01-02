import React from 'react';
import { BsFillTrash3Fill } from "react-icons/bs";
import { BiPlus, BiMinus } from 'react-icons/bi';
import { useGlobalContext } from '../context/context';
import formatNum from '../utils/formatNum';

const Item = ({_id, name, image, qty, price, countInStock}) => {
  const {deleteItem, increaseQty, decreaseQty} = useGlobalContext();

  const maxIncrease = (_id) => {
    if(qty + 1 > countInStock) {
      return
    }
    return increaseQty(_id)
  }

  const minDecrease = (_id) => {
    if(qty - 1 <= 0) {
      return deleteItem(_id)
    }
    return decreaseQty(_id)
  }
  return (
    <tr>
      <td>
        <img src={image} alt={name} className='img'/>
      </td>
      <td>{name}</td>
      <td>
        <button className='btn btn-item' onClick={()=>maxIncrease(_id)}>
          <BiPlus />
        </button>
        <p className='mt-2'>{qty}</p>
        <button className='btn btn-item mt-0' onClick={()=>minDecrease(_id)}>
          <BiMinus />
        </button>
      </td>
      <td>{formatNum(price)}</td>
      <td>
        <BsFillTrash3Fill style={{color: 'darkred'}} onClick={() => deleteItem(_id)} />
      </td>
    </tr>

// <tbody>
// <tr>
//   <th scope="row">1</th>
//   <td>Mark</td>
//   <td>Otto</td>
//   <td>@mdo</td>
// </tr>
// <tr>
//   <th scope="row">2</th>
//   <td>Jacob</td>
//   <td>Thornton</td>
//   <td>@fat</td>
// </tr>
// <tr>
//   <th scope="row">3</th>
//   <td colspan="2">Larry the Bird</td>
//   <td>@twitter</td>
// </tr>
// </tbody>
  )
}

export default Item
