import React from "react"

function MessageSent() {
  return (
    <div className="container w-[1160px] h-[269px] ml-[143px] mr-[63px]"> 
      <div className="flex">     
        <div className="flex items-center">
          <h1 className="w-[659px] h-12 font-arimo text-4xl font-bold text-grey-900 leading-tight">
            Message sent. We'll contact you soon.
          </h1>
        </div>
        <div className="ml-[151px] w-[350px] h-[269px]">
          <div className="w-full h-[107px]">
            <h1 className="text-lg font-arimo font-bold text-grey-900 leading-tight">
              Visit Us
            </h1>
            <p className="text-grey-500 text-base font-lato font-normal leading-none mt-4">
              UET Lahore, Punjab, Pakistan
              <br/>
              Phone: +923039898987
            </p>
          </div>
          <div className="w-full h-114">
            <h1 className=" text-lg font-arimo font-bold leading-48 mt-12">
              Get In Touch
            </h1>
            <p className="mt-4 leading-none text-grey-500 text-base font-lato">
              You can get in touch with us on this provided<br/>
              email. 
              <br/><br/>
              Email: hmjawad087@gmail.com
            </p>
          </div>          
        </div>
      </div>
      <div className="mt-[132px]">
            <button type="submit" className="w-[143px] h-[58px] h-full py-5 px-9 gap-2.5 flex flex-row items-center justify-end bg-blue-900 text-white text-sm font-lato font-normal leading-6 text-center uppercase rounded-3 hover:bg-blue-800">
              <span className="w-32 h-6">
                GO BACK
              </span>
            </button>
            </div> 
    </div>
  )
}

export default MessageSent
