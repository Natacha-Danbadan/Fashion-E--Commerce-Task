import React from "react"
import { Link } from "react-router-dom"

function SendMessage() {
  const handleSubmit = (e) => {
  e.preventDefault();

  return <Link to='/contact-message-sent'></Link>;
  }

  return (    
    <div className="container w-full sm:mx-0 xl:mx-14">
       <div className="flex flex-col lg:flex-row">
        <div className="lg:w-[820px] lg:h-[561px] w-full px-3 h-auto">
          <div>
            <h1 className="text-4xl font-bold font-arimo text-grey-700 leading-tight lg:w-[554px]">
              We would love to hear from you.
            </h1>
            <p className="text-base font-normal font-lato text-grey-600 leading-normal lg:w-[788px] mt-8">
              If you have any query or any type of suggestion, you can contact us here. We would love to hear from you.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="w-full h-auto lg:w-[820px] lg:h-[408px] mt-12">
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-[400px] lg:h-[86px] h-auto">
                <label className="text-lato font-medium text-sm leading-19 text-grey-600" for="name">
                  Name
                </label>
                <input type="text" name="name" className="py-1 px-3 md:h-[58px] h-auto border-grey-300 border-solid border bg-white w-full mt-2" id="name"/>
              </div>
              <div className="w-full lg:w-[400px] lg:h-[86px] h-auto lg:ml-5">
                <label className="text-lato font-medium text-sm leading-19 text-grey-600" for="email">
                  Email
                </label>
                <input type="text" name="name" className="py-1 px-3 md:h-[58px] h-auto border-grey-300 border-solid border bg-white w-full mt-2" id="name"/>           
              </div>
            </div>
            <div className="w-full h-auto lg:h-[220px] mt-5">
              <label className="text-lato font-medium text-sm leading-19 text-grey-600" for="message">
                Message
              </label>
              <textarea id="message" name="message" className="py-1 px-3 h-48 border-grey-300 border-solid border bg-white w-full mt-3">
              </textarea>
            </div>
            <div className="mt-6 absolute">
            <Link to={'/contact-message-sent'}>
            <button type="submit" className="w-full lg:w-[192px] h-auto lg:h-[58px] h-full py-5 px-9 gap-2.5 flex flex-row items-center justify-end bg-active text-white text-sm font-lato font-normal leading-6 text-center uppercase rounded-3 hover:bg-blue-800">
              <span className="xl:w-32 w-full h-6">
                SEND MESSAGE
              </span>
            </button>
            </Link>
            </div>
          </form>
        </div>
        <div className="w-full lg:w-[350px] h-full lg:h-[269px] ml-0 mx-auto lg:ml-[70px] px-3 mt-32 lg:mt-0 ">
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
          <div className="w-full h-[114px]">
            <h1 className="text-xl font-arimo font-bold leading-48 mt-12 text-hero">
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

export default SendMessage