import React from 'react'
import { ProductContext } from '../../db/ProductContext';
import { useContext } from 'react';

const CartItems = ({ title, img, newPrice, id, quantity}) => {
  const { removeFromCart, decreaseQuantity, increaseQuantity, updateCart } = useContext(ProductContext); 

  return (
    <div className="max-30 m-5 pr-0 border-1 border-gray-6 00">
  <div className="flex">
    <div className="col-md-4">
      <img src={img} alt="..." />
    </div>
    <div className="col-md-8">
      <div className="flex flex-col gap-2 ">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">${newPrice}</p>
        <div className="input-group">
  <button className="btn btn-outline-secondary" type="button" onClick={() => decreaseQuantity(id)}  >-</button>
  <input className=' w-[400px] border border-red-500 px-7'  type='number' min='1' value={quantity} onChange={(e) => updateCart(id, parseInt(e.target.value, 10))} />
  <button className="btn btn-outline-secondary" type="button" onClick={() => increaseQuantity(id)}  >+</button>
</div>
<div>
  <button className="btn btn-primary px-4 my-4" onClick={() => removeFromCart(id)}>Remove</button>
</div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default CartItems