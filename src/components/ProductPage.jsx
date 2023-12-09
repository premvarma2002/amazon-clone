import React from 'react'
import { useParams } from 'react-router-dom'
import { useState , useEffect} from 'react';
import ProductDetails from './ProductDetails';

import { callAPI } from '../utils/CallApi';

const ProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

  const getProduct = () => {
      callAPI(`data/products.json`)
      .then((productResults) => {
         setProduct(productResults[id]);
      });
   }

    useEffect(() => {
      getProduct();
    },[]);

    if (!product?.title) return <h1>Loading Product ...</h1>
  return ( product &&
    <div className='h-screen bg-amazonclone-background '>
      <div className='min-w-[1000px] max-w-[1500px] m-auto bg-orange-400'>
        <div className='grid grid-cols-10 gap-2'>
           {/* {left} */}
           <div className='col-span-3 p-8 rounded bg-white m-auto'>
            <img src={`${product.image}`} alt="" />
           </div>
           {/* {middle } */}
           <div className='col-span-5 p-4 rounded bg-white divide-y divide-gray-400 '>
            <div className='mb-3'><ProductDetails product={product} ratings={true}/></div>
            <div className='text-base xl:text-lg mt-3'>
              {product.description}
            </div>
           </div>
           {/* {right } */}
           <div className='col-span-2 p-4 rounded bg-white'>
             <div className='text-xl xl:text-2xl font-semibold'>{product.price}</div>
             <div className='text-base xl:text-lg font-semibold'>{product.oldPrice}</div>
             <div className='text-sm xl:text-base font-semibold'>FREE Returns</div>
             <div className='text-sm xl:text-base font-semibold'>FREE Delivery</div>
             <div className='text-base xl:text-lg font-semibold'>In Stock</div>
             <div className='text-base xl:text-lg'>Quantity:
              <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
             </div>
             <button>Add to cart</button>
           </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage