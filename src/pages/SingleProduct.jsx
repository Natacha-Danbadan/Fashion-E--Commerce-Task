import useCartStore from "../store/cartStore";
import React, {useState, useContext} from 'react';
import {useParams} from 'react-router-dom'
import { SingleItemContext } from '../context/SingleItemContext';


function SingleProduct() {
  const {id} = useParams();
  const addToCart = useCartStore((state)=>state.addToCart)
  const removeFromCart = useCartStore((state)=>state.removeFromCart)
  const existsInCart = useCartStore((state)=>state.existsInCart)
  const [addRemoveBtn, setAddRemoveBtn] = useState(existsInCart(id))

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

  // destructure product
  const {title, price, description, image} = product;  
  const total  = price
  const numberInSingleItemCart = 1
  const newProduct  =  {...product, total, numberInSingleItemCart}

  const addToCartStore =()=> {
    if (!existsInCart(id)) {
      addToCart(newProduct)
      setAddRemoveBtn(true)
    }
    else {
      removeFromCart(id)
      setAddRemoveBtn(false)
    }
  }


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
            <button className='bg-black py-4 px-8 text-white' onClick={addToCartStore}>
            {
              addRemoveBtn ? 'Remove From Cart' : 'Add To Cart' 
            }
            </button>
          </div>
        </div>
      </div>
    </section>

  )
}

export default SingleProduct
