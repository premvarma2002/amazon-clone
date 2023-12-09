import React from 'react'
import { useParams } from 'react-router-dom'
import { useState , useEffect} from 'react';

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
    },[])

    if (!product?.title) return <h1>Loading Product ...</h1>
  return ( product &&
    <div className='h-screen bg-amazonclone-background '>
      <div className='min-w-[1000px] max-w-[1500px] m-auto bg-orange-400'>
        <div className='grid grid-cols-10'>
           {/* {left} */}
           <div className='col-span-3 p-8 rounded bg-white'>
            <img src={`${product.image}`} alt="" />
           </div>
           {/* {middle } */}
           <div className='col-span-5 bg-pink-400'></div>
           {/* {right } */}
           <div className='col-span-2 bg-green-500'></div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage