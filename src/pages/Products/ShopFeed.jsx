import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { ProductContext } from '../../db/ProductContext';
import { useNavigate } from 'react-router-dom';
import Loading from '../../component/Loading';


const ShopFeed = ({ title, img, prevPrice, newPrice, company, color, id }) => {
  

  
  const { addToCart, cart} = useContext(ProductContext);
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 6000)

  }, [])

  return (
    <>{loading ? <Loading /> :
    <div className='w-400px border-2 pb-2 my-4 shadow-2xl'>
    <img className='bg-white' style={{objectFit: 'contain', width: '400px', height: '500px'}} src={img}  alt={title} onClick={() => navigate(`/products/${encodeURIComponent(title)}`)} />
    <div className='flex flex-col gap-3 px-1'>
      <div className='flex justify-between '>
    <div >{title}</div>
    <div className='text-gray-900'> ${newPrice}</div> </div>
    <div class="card-text">{color}</div>
    <button className="px-28 py-2 border-1 border-green-900 hover:bg-green-900 hover:text-white"  onClick={() => addToCart({title, img, prevPrice, newPrice, color, id})}>
                Add To Cart {cart.find((item) => item.id === id) && (
              <span className='bg-transparent'>{cart.find((item) => item.id === id).quantity}</span>
            )}
            </button>
            
  </div>
</div>}
</>
  )
}

export default ShopFeed