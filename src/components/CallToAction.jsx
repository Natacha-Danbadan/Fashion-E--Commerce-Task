import IconCallOne from '../assets/IconCallOne.svg'
import IconCallTwo from '../assets/IconCallTwo.svg'
import IconCallThree from '../assets/IconCallThree.svg'
import IconCallFour from '../assets/IconCallFour.svg'


const CallToAction = () => {
  return (
    <div className="md:px-14 px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-[20px] mx-auto md:mx-w-none md:mx-0">
        <div className="w-[300px] flex mb-4">
          <img src={IconCallOne} alt="truck" />
          <div className="ml-5">
            <h5 className="font-bold font-lato">Free Shipping</h5>
            <p className="font-lato">
              Enjoy free shipping on all orders above $100
            </p>
          </div>
        </div>
        <div className="w-[300px] flex mb-4">
          <img src={IconCallTwo} alt="truck" />
          <div className="ml-5">
            <h5 className="font-bold font-lato">SUPPORT 24/7</h5>
            <p className="font-lato">
              Our support team is there to help you for queries
            </p>
          </div>
        </div>
        <div className="w-[300px] flex mb-4">
          <img src={IconCallThree} alt="truck" />
          <div className="ml-5">
            <h5 className="font-bold font-lato">30 DAYS RETURN</h5>
            <p className="font-lato">
              Simply return it within 30 days for an exchange.
            </p>
          </div>
        </div>
        <div className="w-[300px] flex mb-4">
          <img src={IconCallFour} alt="truck" />
          <div className="ml-5">
            <h5 className="font-bold font-lato">100% PAYMENT SECURE</h5>
            <p className="font-lato">
              Our payments are secured with 256 bit encryption
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] mt-10 mx-auto">
        <div className="mb-8">
            <div className="p-4 bg-black text-center justify-center items-center py-16">
              <h2 className="text-white font-lato uppercase text-[32px]">
              Peace of mind
              </h2>
              <p className="text-white font-lato text-[18px] mb-6">
              A one-stop platform for all your fashion needs, hassle-free. Buy with a peace of mind.
              </p>
              <button className="text-active p-4 bg-white hover:bg-active hover:text-white">
                BUY NOW
              </button>
            </div>
        </div>
        
        <div className="mb-8">
          <div className="p-4 h-[310px] bg-black text-center justify-center items-center py-16">
            <h2 className="text-white font-lato uppercase text-[32px]">
              BUY 2 GET 1 FREE
            </h2>
            <p className="text-white font-lato text-[18px] mb-6">
              End of season sale. Buy any 2 items of your choice and get 1 free.
            </p>
            <button className="text-active p-4 bg-white hover:bg-active hover:text-white">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
