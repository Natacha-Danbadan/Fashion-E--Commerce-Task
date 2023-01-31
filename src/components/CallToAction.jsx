import IconCallOne from '../assets/IconCallOne.svg'
import IconCallTwo from '../assets/IconCallTwo.svg'
import IconCallThree from '../assets/IconCallThree.svg'
import IconCallFour from '../assets/IconCallFour.svg'


const CallToAction = () => {
  return (
    <div className=''>
      <div className='flex lg:justify-between lg:w-[1366px] lg:flex-row flex-col md:px-14 px-8 pt-8 md:flex-col'>
       <div className='w-[300px] flex mb-4'>
          <img src={IconCallOne} alt="truck"/>
          <div className='ml-5'>
            <h5 className='font-bold font-lato'>Free Shipping</h5>
            <p className='font-lato'>
              Enjoy free shipping on all orders above $100
            </p>
          </div>
         
       </div>
       <div className='w-[300px] flex mb-4'>
          <img src={IconCallTwo} alt="truck"/>
          <div className='ml-5'>
            <h5 className='font-bold font-lato'>SUPPORT 24/7</h5>
            <p className='font-lato'>
              Our support team is there to help you for queries
            </p>
          </div>
         
       </div>
       <div className='w-[300px] flex mb-4'>
          <img src={IconCallThree} alt="truck"/>
          <div className='ml-5'>
            <h5 className='font-bold font-lato'>30 DAYS RETURN</h5>
            <p className='font-lato'>
              Simply return it within 30 days for an exchange.
            </p>
          </div>
         
       </div>
       <div className='w-[300px] flex mb-4'>
          <img src={IconCallFour} alt="truck"/>
          <div className='ml-5'>
            <h5 className='font-bold font-lato'>100% PAYMENT SECURE</h5>
            <p className='font-lato'>
              Our payments are secured with 256 bit encryption
            </p>
          </div>
         
       </div>
      </div>
     <div className='flex lg:flex-row flex-col md:px-4 px-6 pt-8 space-x-6 md:flex-row ml-4'>
        <div className='flex'>
         <div className='w-[600px] h-[300px] bg-black text-center justify-center items-center mb-5'>
           <h2 className='text-white font-lato uppercase text-[32px] m-5'>Peace of mind</h2>
           <p className='text-white font-lato text-[18px] m-8'>A one-stop platform for all your fashion needs, hassle-free. Buy with a peace of mind.</p>
           <button className='text-purple-500 w-[120px] h-[40px] bg-white hover:bg-purple-300'>BUY NOW</button>
         </div>
        </div>
        <div className='flex'>
         <div className='w-[600px] h-[300px] bg-black text-center justify-center items-center mb-4'>
           <h2 className='text-white font-lato uppercase text-[32px] m-5'>BUY 2 GET 1 FREE</h2>
           <p className='text-white font-lato text-[18px] m-8'>End of season sale. Buy any 2 items of your choice and get 1 free.</p>
           <button className='text-purple-500 w-[120px] h-[40px] bg-white hover:bg-purple-300'>BUY NOW</button>
         </div>
       </div>
      
     </div> 
      
    </div>
  );
};

export default CallToAction;
