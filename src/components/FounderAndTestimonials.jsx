import founder1 from '../assets/founder1.jpg'
import {RiDoubleQuotesL} from 'react-icons/ri'
function FounderAndTestimonials() {
  return (
    <>
      <div className='pr-16 pl-16 bg-[#FBFBFB]'>
          <h6 className="text-center text-3xl font-Arimo font-bold leading-9 pt-28 pb-28 ">The Founders</h6>
        <div className='pb-36 lg: flex flex-row flex-wrap space-x-4 md: flex flex-wrap "  '>
          <div>
            <div>
              <img className='w-72 h-72 mb-8' src={founder1} />
            </div>
            <h3 className='font-arimo font-bold text-lg leading-6 '>Name Name</h3>
          </div>
          <div>
            <div>
              <img className='w-72 h-72 mb-8' src={founder1} />
            </div>
            <h3 className='font-arimo font-bold text-lg leading-6 '>Name Name</h3>
          </div>
          <div>
            <div>
              <img className='w-72 h-72 mb-8' src={founder1} />
            </div>
            <h3 className='font-arimo font-bold text-lg leading-6'>Name Name</h3>
          </div>
          <div>
            <div>
              <img className='w-72 h-72 mb-8' src={founder1} />
            </div>
            <h3 className='font-arimo font-bold text-lg leading-6 '>Name Name</h3>
          </div>
        </div>
      </div>
      <div className='bg-[#E5E5E5] md:bg-[#E5E5E5] sm:bg-[#E5E5E5] lg:bg-[#E5E5E5]'>
        <h6 className='text-center text-3xl font-Arimo font-bold leading-9 pt-20 pb-32'>Testimonials</h6>
        <div className=''> 
          <div className='lg:flex '> 
            <div className='testimonial-image'>
              <img className='rounded-full w-52 h-52 ml-56 mr-12' src={founder1} />
            </div>
            <div className='testimonial-text'>
              <RiDoubleQuotesL className='w-9 h-7 mb-6 '/>
              <p className='text-[#555555] font-lato font-normal text-2xl mb-8'>Once we ordered some accessories items and we got the products delivered in our doorstep, the customer support was super helpful and they answered all my queries.</p>
              <h3 className='text-[#1D1D1D] font-bold text-xl font-arimo pb-60'>Stacy</h3>
            </div>
          </div>
        </div>  
      </div>
  </>

  )
}

export default FounderAndTestimonials
