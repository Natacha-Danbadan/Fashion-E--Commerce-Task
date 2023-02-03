import founder1 from '../assets/founder1.png'
import founder2 from '../assets/founder2.png'
import founder3 from '../assets/founder3.png'
import founder4 from '../assets/founder4.png'
import testifier1 from '../assets/testifier1.png'
import testifier2 from '../assets/testifier2.png'
import testifier3 from '../assets/testifier3.png'
import {RiDoubleQuotesL} from 'react-icons/ri'
function FounderAndTestimonials() {
  return (
    <>
      <div className='pr-16 pl-16 bg-founders'>
          <h6 className="text-center text-3xl font-Arimo font-bold leading-9 pt-16 pb-12 ">The Founders</h6>
        <div className='pb-20 lg: flex flex-row justify-between flex-wrap md: flex flex-wrap justify-evenly'>
          <div>
            <div>
              <img className='w-64 h-64 mb-4' src={founder1} alt={"founder"} />
            </div>
            <h3 className='font-arimo font-bold text-lg leading-6 pb-8 '>HM Jawad</h3>
          </div>
          <div>
            <div>
              <img className='w-64 h-64 mb-4' src={founder2} alt={"founder"} />
            </div>
            <h3 className='font-arimo font-bold text-lg leading-6 pb-8 '>Furqan Abid</h3>
          </div>
          <div>
            <div>
              <img className='w-64 h-64 mb-4' src={founder3} alt={"founder"} />
            </div>
            <h3 className='font-arimo font-bold text-lg leading-6 pb-8'>Abdullah Ah</h3>
          </div>
          <div>
            <div>
              <img className='w-64 h-64 mb-4' src={founder4} alt={"founder"} />
            </div>
            <h3 className='font-arimo font-bold text-lg leading-6 '>Abrar Khan</h3>
          </div>
        </div>
      </div>
      <div className='bg-testimonialSection h-full w-full'>
        <h6 className='text-center text-3xl font-Arimo font-bold leading-9 pt-20'>Testimonials</h6>
        <div className=' lg:pb-16 md:pb-16 sm:pb-24 xs:flex xs:flex-col xs:items-center sm:flex sm:flex-col sm:items-center md:flex md:flex-row lg:flex lg:flex-row '> 
          <div className='lg:w-52 lg:h-52 md:w-52 md:h-52 sm:w-52 sm:h-52 lg:ml-56 lg:mt-24 md:ml-24 md:mt-24 sm:mt-16 xs:mt-16  testimonial-image'>
            <img className='w-full h-full' src={testifier1} alt={"testifier"} />
          </div>
          <div className=' lg:mr-24 lg:w-[663px] lg:h-[102px] md:w-[663px] md:h-[51px] md:pb-36 md:mr-8 sm:w-[500px] sm:pb-36 sm:h-[51px] xs:pr-12 xs:pl-12  testimonial-text'>
            <RiDoubleQuotesL className='w-9 h-7 mb-6 '/>
            <p className='text-testimonialText font-lato font-normal text-2xl pb-8 '>Once we ordered some accessories items and we got the products delivered in our doorstep, the customer support was super helpful and they answered all my queries.</p>
            <h3 className='text-testifierName font-bold text-xl font-arimo'>Stacy</h3>
          </div>
        </div>

        <div className=' lg:pb-16 md:pb-16 sm:pb-24 xs:flex xs:flex-col xs:items-center sm:flex sm:flex-col sm:items-center md:flex md:flex-row lg:flex lg:flex-row '> 
          <div className='lg:w-52 lg:h-52 md:w-52 md:h-52 sm:w-52 sm:h-52 lg:ml-56 lg:mt-24 md:ml-24 md:mt-24 sm:mt-16 xs:mt-16  testimonial-image'>
            <img className='w-full h-full' src={testifier2} alt={"testifier"} />
          </div>
          <div className=' lg:mr-24 lg:w-[663px] lg:h-[102px] md:w-[663px] md:h-[51px] md:pb-36 md:mr-8 sm:w-[500px] sm:pb-36 sm:h-[51px] xs:pr-12 xs:pl-12  testimonial-text'>
            <RiDoubleQuotesL className='w-9 h-7 mb-6 '/>
            <p className='text-testimonialText font-lato font-normal text-2xl pb-8 '>I ordered 5 shirts from them and received them in no time. The customer support was awesome!</p>
            <h3 className='text-testifierName font-bold text-xl font-arimo'>Tiffany</h3>
          </div>
        </div>

        <div className=' lg:pb-16 md:pb-16 sm:pb-24 xs:flex xs:flex-col xs:items-center sm:flex sm:flex-col sm:items-center md:flex md:flex-row lg:flex lg:flex-row '> 
          <div className='lg:w-52 lg:h-52 md:w-52 md:h-52 sm:w-52 sm:h-52 lg:ml-56 lg:mt-24 md:ml-24 md:mt-24 sm:mt-16 xs:mt-16  testimonial-image'>
            <img className='w-full h-full' src={testifier3} alt={"testifier"} />
          </div>
          <div className=' lg:mr-24 lg:w-[663px] lg:h-[102px] md:w-[663px] md:h-[51px] md:pb-36 md:mr-8 sm:w-[500px] sm:pb-36 sm:h-[51px] xs:pr-12 xs:pl-12  testimonial-text'>
            <RiDoubleQuotesL className='w-9 h-7 mb-6 '/>
            <p className='text-testimonialText font-lato font-normal text-2xl pb-8 '>I got a wrong shirt so I contacted them and they happily offered me a refund. I will surely shop from them again.</p>
            <h3 className='text-testifierName font-bold text-xl font-arimo'>James</h3>
          </div>
        </div>

        
      
      </div>
  </>

  )
}

export default FounderAndTestimonials
