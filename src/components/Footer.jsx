import Visa from '../assets/Visa.png'
import Mastercard from '../assets/Mastercard.png'
import Paypal from '../assets/Paypal.png'
import VisaE from '../assets/VisaE.png'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="w-auto h-[477px] grid">
      <div className="mx-[63px] grid grid-cols-2 lg:grid-cols-4 gap-x-24">
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
            <Link to='#'>FAQ</Link>FAQ 

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

        <div className="mt-12 lg:mt-[70px]">
          <h3 className="h-[14px] font-arimo text-xs text-hero text-bold">
            GET IN THE KNOW
          </h3>

          <div className=" flex border-b border-black w-[253px] pb-2"> <input class="bg-white focus:outline-none focus:shadow-outline mt-[41px] rounded-lg py-2 px-4 block w-full appearance-none leading-normal" type="text" placeholder="Enter Email" />

          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white ml-33 px-0  border-blue-500 hover:border-transparent pt-12 rounded border-y-8 border-y-transparent "> </button>
           </div>
          

        </div>
        
      </div>

      <div className="w-auto mx-[63px] mt-20 grid md:grid-cols-2 gap-y-4 " >
        <div className='order-2 md:order-1'>
        <span className="h-[17px] font-lato text-base font-normal font-hero">
         &copy; 2020 NorthStar eCommerce
          </span>

          <br />

          <span className="font-lato text-base font-normal font-hero">
            Privacy Policy Terms & Conditions

          </span>
        </div> 

          <div className='flex order-1 md:order-2'>
          <img src={Visa} alt="" />  
          <img src={Mastercard} alt="" />
          <img src={Paypal} alt="" />
          <img src={VisaE} alt="" />

          </div>

        

      </div>
      
    </div>
  )
}

export default Footer
