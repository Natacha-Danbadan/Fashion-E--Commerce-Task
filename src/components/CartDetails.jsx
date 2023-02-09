import CartSingle from "./CartSingle";
import useCartStore from "../store/cartStore";
import { useState, useEffect } from "react";

 
function CartDetails() {

const cart = useCartStore((state)=>state.cart)
const removeFromCart = useCartStore((state)=>state.removeFromCart)
const total = useCartStore((state)=>state.total)
const getTotal = useCartStore((state)=>state.getTotal)
const numberInCart = useCartStore((state)=>state.numberInCart)
const increaseNumberInCart = useCartStore((state)=>state.increaseNumberInCart)
const decreaseNumberInCart = useCartStore((state)=>state.decreaseNumberInCart)

const [checkoutCart, setCheckoutCart] = useState([])

useEffect(()=> {
  setCheckoutCart(Object.values(cart)) 
},[numberInCart, cart])

useEffect(()=>{
  getTotal()
}, [numberInCart,cart, getTotal])

  return (
    <div className="mt-10">
      <div className="mb-8">
        <table className="table table-compact w-full">
          <thead className="font-arimo font-bold text-hero">
            <tr>
              <th></th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
          {checkoutCart.map((item)=> < CartSingle singleCartProp={{...item, removeFromCart, increaseNumberInCart, decreaseNumberInCart}} key={item.id} />)}
          </tbody>
        </table>
      </div>

      <div className="lg:w-2/5 w-full">
        <h3 className="mb-8 font-arimo text-hero font-bold text-3xl">Card Totals</h3>
        <div className="flex border-b justify-between mb-4 font-lato">
          <p>Subtotal</p>
          <p className="">{`$${total.toFixed(2)}`}</p>
        </div>
        <div className="flex border-b justify-between mb-4 font-lato">
          <p>Shipping Fee</p>
          <p>Free!</p>
        </div>
        <div className="flex justify-between font-arimo mb-4 text-hero font-bold">
          <p>Total</p>
          <p>{`$${total.toFixed(2)}`}</p>
        </div>
        <button className="bg-checkout text-white p-3">PROCEED TO CHECKOUT</button>
      </div>
    </div>
  );
}

export default CartDetails
