import React, {useContext} from 'react';
import {useParams} from 'react-router-dom'
import { SingleItemContext } from '../context/SingleItemContext';

function SingleProduct() {
  const {id} = useParams();
  // console.log(id);
  const { products } = useContext(SingleItemContext);

  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  if (!product) {
    return(
      <section className='h-screen flex justify-center items-center'>Loading...</section>
    )
  }
  // console.log(product);

  // destructure product
  const {title, price, description, image} = product;
  return (
    <section className='pt-32 pb-12 lg:py-32 h-screen flex items-center bg-white'>
      <div className='container mx-auto'>
        {/* image & text wrapper */}
        <div className='flex flex-col lg:flex-row items-center'>
          {/* image */}
          <div className='flex flex-1 justify-center items-center mb-8 lg:mb:0'>
            <img className='max-2-[200px] lg:max-w-sm' src={image} alt='' />
          </div>
          {/* text */}
          <div className='flex-1 text-center lg:text-left'>
            <h1 className='text-[36px] font-bold mb-2 mx-auto lg:mx-0 max-w-[450px] font-arimo'>{title}</h1>
            <div className='text-xl text-neutral-content font-medium mb-6'>${price}</div>
            <p className='mb-8'>{description}</p>
            <button className='bg-black py-4 px-8 text-white'>Add to cart</button>
          </div>
        </div>
      </div>
    </section>

// text-[36px] font-bold mb-2 max-w-[450px] mx-auto font-arimo
  )
}

export default SingleProduct
