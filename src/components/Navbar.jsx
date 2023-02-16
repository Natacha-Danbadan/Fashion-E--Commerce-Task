import { useState} from "react";
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";
import {Link} from "react-router-dom"
import useCartStore from "../store/cartStore"


function Navbar() {
  const [openModal, setOpenModal] = useState(false)
  const modalHandler =()=> {
    setOpenModal(!openModal)
   }  

  const linkFunc =() => {
    setOpenModal(!openModal)
  }
  const numberInCart = useCartStore((state)=>state.numberInCart)
  console.log(numberInCart)


  return (
    <div className="">
            <nav className='navbar bg-neutral-content w-full drop-shadow-xl md:px-14 px-8 flex justify-between items-center'>
              <div className="w-3/12 navbar-start">
                <h2 className='w-full text-hero font-lato font-bold text-3xl'>NorthStar</h2>
              </div>
              <div className="navbar-center hidden lg:flex w-6/12">
                <ul className='menu menu-horizontal text-black font-arimo px-1'>
                  <li>
                    <Link to='/' className='text-active'>HOME</Link>
                  </li>
                  <li>
                    <Link to='/about'className='hover:text-active'>ABOUT</Link>
                  </li>
                  <li>
                    <Link to='/contact' className='hover:text-active'>CONTACT US</Link>
                  </li>
                </ul>
              </div>
              <div className="w-3/12 text-black navbar-end">
              <Link to='/cart'>
                <div className="relative">
                    <button className="mr-4"><FaShoppingCart size={28}/></button>
                    <div className={`absolute top-[8px] right-[6px] aspect-square rounded-full w-4 ${numberInCart ? "flex": "hidden"} justify-center items-center bg-red-600`}>
                      <p className="text-white text-xs">{ numberInCart }</p>
                    </div>
                </div>
              </Link>
                <button className="lg:hidden z-50" onClick={modalHandler}>
                {openModal ? <FaTimes size={28}/> : <FaBars size={28}/>}
                </button>
              </div>
            </nav>
            {
              openModal ? (
                <div className="lg:hidden flex w-screen fixed z-10 h-screen">
                  <div className="w-full h-full flex items-end bg-active">
                    <nav className="rounded-[50px] h-4/5 w-full">
                        <ul className="flex flex-col text-white font-arimo gap-8 text-xl font-bold w-full h-[50vh] justify-center items-center">
                          <li>
                              <Link to='/' className='hover:text-hero' onClick={ linkFunc }>HOME</Link>
                          </li>
                          <li>
                              <Link to='/about'className='hover:text-hero' onClick={ linkFunc }>ABOUT</Link>
                          </li>
                          <li>
                              <Link to='/contact' className='hover:text-hero' onClick={ linkFunc }>CONTACT US</Link>
                          </li>
                        </ul>
                    </nav>
                  </div>
              </div>
              ):null
            }
            
          </div>  
  )
}

export default Navbar
