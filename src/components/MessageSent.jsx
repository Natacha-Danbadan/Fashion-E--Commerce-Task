import React from "react"
import { Link } from "react-router-dom"

function MessageSent() {

  return (
    <div className="container sm:w-full md:w-[1160px] h-auto xl:ml-[143px] xl:mr-[63px]"> 
      <div className="flex flex-col lg:flex-row"> 
        <div className="flex flex-col px-3">
        <div className="flex items-center h-[269px]">
          <h1 className="sm:w-full md:w-[659px] h-12 font-arimo text-4xl font-bold text-grey-700 leading-tight">
            Message sent. We'll contact you soon.
          </h1>          
        </div>
        <div className="xl:mt-[132px]">
            <Link className="absolute" to={'/contact'}>
            <button className="w-[143px] h-[58px] h-full py-5 px-9 gap-2.5 flex flex-row items-center justify-end bg-active text-white text-sm font-lato font-normal leading-6 text-center uppercase rounded-3 hover:bg-blue-800">
              <span className="w-32 h-6">
                GO BACK
              </span>
            </button>
        </Link>
       </div>   
        </div>
        <div className="lg:ml-[151px] w-full h-full lg:w-[350px] lg:h-[269px] mt-28 lg:mt-0 ml-0 mx-auto px-3">
          <div className="w-full h-[107px]">
            <h1 className="text-xl font-arimo font-bold text-hero leading-tight">
              Visit Us
            </h1>
            <p className="text-grey-600 text-base font-lato font-normal leading-none mt-4">
              UET Lahore, Punjab, Pakistan
              <br/>
              Phone: +923039898987
            </p>
          </div>
          <div className="w-full h-114">
            <h1 className=" text-xl font-arimo text-hero font-bold leading-48 mt-12">
              Get In Touch
            </h1>
            <p className="mt-4 leading-none text-grey-600 text-base font-lato">
              You can get in touch with us on this provided<br/>
              email. 
              <br/><br/>
              Email: hmjawad087@gmail.com
            </p>
          </div>          
        </div>
      </div>
      
    </div>
  )
}

export default MessageSent
