import IconCallOne from '../assets/IconCallOne.svg'
import IconCallTwo from '../assets/IconCallTwo.svg'
import IconCallThree from '../assets/IconCallThree.svg'
import IconCallFour from '../assets/IconCallFour.svg'


const CallToAction = () => {
  return (
    <div className='px-20 w-full'>
      <div className="flex flex-col items-center lg:flex-row">
        <div className="flex justify-center items-center space-x-4 lg:space-x-10">
          <div className="relative">
            <img
              src={IconCallOne}
              alt="truck"
              className="absolute right-[185px]"
            />
          
              <h5 className="uppercase font-lato font-bold">Free shipping</h5>
              <p className="font-lato text-3">
                Enjoy free shipping on all <br /> orders above $100
              </p>
          
          </div>
          <div className="relative">
            <img
              src={IconCallTwo}
              alt="truck"
              className="absolute right-[185px]"
            />
            <h5 className="uppercase font-lato font-bold">Support 24/7</h5>
            <p className="font-lato text-3">
              Our support team is there <br /> to help you for queries
            </p>
          </div>
          <div className="relative">
            <img
              src={IconCallThree}
              alt="truck"
              className="absolute right-[185px]"
            />
            <h5 className="uppercase font-lato font-bold">30 days return</h5>
            <p className="font-lato text-3">
              Simply return it within 30 <br />
              days for an exchange.
            </p>
          </div>
          <div className="relative">
            <img
              src={IconCallFour}
              alt="truck"
              className="absolute right-[200px]"
            />
            <h5 className="uppercase font-lato font-bold">
              100% payment secure{" "}
            </h5>
            <p className="font-lato text-3">
              Our payments are secured <br />
              with 246 bit encryption
            </p>
          </div>
        </div>
  
      </div>
       <div className="flex pt-20">
          <div className="flex flex-col justify-center items-center w-[500px] h-[380px] bg-black text-center mr-5">
            <div>
              <h2 className="text-white text-4xl uppercase">Peace of mind</h2>
              <p className="text-white m-12">
                A one-stop platform for all your fashion needs, hassle-free. Buy
                with a peace of mind.
              </p>
              <button className="text-purple w-[120px] h-[48px] bg-white hover:bg-blue-100">
                Buy now
              </button>
            </div>
          </div>
         
            <div className="flex flex-col justify-center items-center w-[430px] h-[380px] bg-black text-center mr-4">
              <div>
                <h2 className="text-white text-4xl uppercase"> 
                  Buy 2 Get 1 Free
                </h2>
                <p className="text-white m-12">
                  {" "}
                  End of season sale. Buy any 2 items of your choice and get 1
                  free.
                </p>
                <button className="text-purple w-[120px] h-[48px] bg-white hover:bg-blue-100">
                  Buy now
                </button>
              </div>
            </div>
          
        </div>
    </div>
  );
};

export default CallToAction;
