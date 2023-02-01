import React, {useContext} from 'react'
import { Link } from 'react-router-dom'

function SingleItem({product}) {
  console.log(product)

  const { id, image, title,price } = product
  return (
    <div>
      <div className="border border-[#e4e4e4] h-[342px] w-[295px] mb-4 relative overflow-hidden group transition bg-white">
        <div className="w-full h-full flex justify-center items-center">
          <div className='w-[295px] mx-auto flex justify-center items-center'>
            <img className='max-j-[160px] group-hover:scale-110 transition duration-300' src={image} alt="" />
          </div>
        </div>


        <div className="absolute top-0 right-0 group-hover:right-2 p-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <Link to ={`/product/${id}`}>
            <button>
              <div className="flex justify-center items-center text-black font-arimo px-2 bg-neutral-content">
                <div>Buy Now</div>
              </div>
            </button>
          </Link>
        </div>
      </div>


      <div>
        <div className='flex justfy-center'>
          <Link to = {`/product/${id}`}>
            <h2 className='font-semibold mb-1 font-arimo lg:mx-auto'>{title}</h2>
          </Link>
        </div>
        <div className="font-semibold text-neutral-content">${price}</div>
      </div>
    </div>

  )
}

export default SingleItem
