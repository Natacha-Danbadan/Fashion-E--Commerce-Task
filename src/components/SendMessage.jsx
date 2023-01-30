import React from "react"

function SendMessage() {
  return (    
   <div className="container w-[1240px] h-[563px] mx-[63px]">
       <div className="flex">
        <div className="w-[820px] h-[561px]">
          <div>
            <h1 className="text-2xl font-bold font-arimo text-grey-900 leading-tight w-554">
              We would love to hear from you.
            </h1>
            <p className="text-sm font-normal font-lato text-grey-600 leading-normal w-788 mt-8">
              If you have any query or any type of suggestion, you can contact us here. We would love to hear from you.
            </p>
          </div>
          <form className="w-[820px] h-[408px] mt-12">
            <div className="flex">
              <div className="w-[400px] h-[86px]">
                <label className="text-lato font-medium text-sm leading-19 text-grey-500" for="name">
                  Name
                </label>
                <input type="text" name="name" className="py-1 px-3 h-[58px] border-grey-300 border-solid border bg-white w-full mt-2" id="name"/>
              </div>
              <div className="w-[400px] h-[86px]">
                <label className="text-lato font-medium text-sm leading-19 text-grey-500 ml-5" for="email">
                  Email
                </label>
                <input type="text" name="name" className="py-1 px-3 h-[58px] border-grey-300 border-solid border bg-white w-full mt-2 ml-5" id="name"/>           
              </div>
            </div>
            <div className="w-full h-220 mt-5">
              <label className="text-lato font-medium text-sm leading-19 text-grey-500" for="message">
                Message
              </label>
              <textarea id="message" name="message" className="py-1 px-3 h-48 border-grey-300 border-solid border bg-white w-full mt-3">
              </textarea>
            </div>
            <div className="mt-6">
            <button type="submit" className="w-[180px] h-[58px] h-full py-5 px-9 gap-2.5 flex flex-row items-center justify-end bg-blue-900 text-white text-sm font-lato font-normal leading-6 text-center uppercase rounded-3 hover:bg-blue-800">
              <span className="w-32 h-6">
                SEND MESSAGE
              </span>
            </button>
            </div>
          </form>
        </div>
        <div className="w-[350px] h-[269px] ml-[70px]">
          <div className="w-full h-[107px]">
            <h1 className="text-lg font-arimo font-bold text-grey-900">
              Visit Us
            </h1>
            <p className="text-grey-500 text-base font-lato font-normal leading-none mt-4">
              UET Lahore, Punjab, Pakistan
              <br/>
              Phone: +923039898987
            </p>
          </div>
          <div className="w-full h-[114px]">
            <h1 className="text-lg font-arimo font-bold leading-48 mt-12">
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
    </div>
  )
}

export default SendMessage