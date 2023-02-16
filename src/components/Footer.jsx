import Visa from '../assets/Visa.png'
import Mastercard from '../assets/Mastercard.png'
import Paypal from '../assets/Paypal.png'
import VisaE from '../assets/VisaE.png'
import { Link } from 'react-router-dom'
import { BsChevronRight } from 'react-icons/bs'

function Footer() {
  return (
    <div className="w-auto pt-20 lg:pt-0 grid">
      <div className="mx-[63px] pb-4 grid grid-cols-2 lg:grid-cols-4 gap-x-24">
        <div className="mt-[70px]">
          <h3 className="h-[14px] font-arimo font-bold text-xs text-hero">
            COMPANY INFO
          </h3>
          <div className="mt-[29.58px]">
            <span className="font-lato font-normal text-base text-hero ">
             <Link to='#'>About Us </Link> <br /> 
             <Link to='#'>Latest Posts </Link> <br />
             <Link to='#'>Contact Us</Link> <br />
             <Link to='#'>Shop</Link>
              
            </span>

          </div>

        </div>
        <div className="mt-[70px]">
          <h3 className="h-[14px] w-[78px] font-arimo text-xs text-hero text-bold">
           HELP LINKS
          </h3>
          <div className="w-[99px] mt-[29.58px] ">
            <span className="font-lato font-normal text-base text-hero">
            <Link to='#'>Tracking</Link> <br />
            <Link to='#'>Order Status</Link> <br />
            <Link to='#'>Delivery</Link> <br />
            <Link to='#'>Shipping Info</Link> <br />
            <Link to='#'>FAQ</Link>

            </span>
          </div>

        </div>

        <div className="mt-12 lg:mt-[70px]">
          <h3 className="h-[14px] font-arimo text-xs text-bold text-hero">
          USEFUL LINKS
          </h3>
          <div className="mt-[29.58px] w-[99px]">
            <span className="font-lato font-normal text-base text-hero">
            <Link to='#'>Special Offers</Link> <br />
            <Link to='#'>Gift Cards</Link> <br />
            <Link to='#'>Advertising</Link> <br />
            <Link to='#'>Terms of Use</Link>

            </span>

          </div>

        </div>

        <div className="my-11 lg:mt-[70px]">
          <h3 className="h-[14px] font-arimo text-xs text-hero text-bold">
            GET IN THE KNOW
          </h3>
 
          <div className="border-b border-black pb-2 ">  
          
          <input className="bg-white focus:outline-none focus:shadow-outline mt-[44px] py-2 block m-[1px] appearance-none leading-normal" type="text" placeholder="Enter Email" /> 
          < BsChevronRight  className=' ml-[250px] '/>
          
           </div>

        </div>
        
        
      </div>

      <div className="w-auto mx-[63px] py-10 grid md:grid-cols-2 gap-y-4 border-t-2" >
        <div className=''>
        <span className=" font-lato text-base font-normal font-hero">
         &copy; 2020 NorthStar eCommerce
          </span>

          <br />

          <span className="font-lato text-base font-normal font-hero">
            Privacy Policy Terms & Conditions

          </span>
        </div> 

          <div className='flex justify-end gap-14'>
            <img src={Visa}  alt="Visa logo"  className='aspect-square w-14'/>  
            <img src={Mastercard} alt="MasterCard logo" className='aspect-square w-14'/>
            <img src={Paypal} alt="Paypal logo" className='aspect-square w-14'/>
            <img src={VisaE} alt="Visa Electron logo" className='aspect-square w-16'/>

          </div>
          
      </div>
      
      
    </div>
    
  )
}

export default Footer
