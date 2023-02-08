import CartSingle from "./CartSingle";
import useCartStore from "../store/cartStore";






function CartDetails() {

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
            <CartSingle/>
            <CartSingle/>
            <CartSingle/>
          </tbody>
        </table>
      </div>

      <div className="lg:w-2/5 w-full">
        <h3 className="mb-8 font-arimo text-hero font-bold text-3xl">Card Totals</h3>
        <div className="flex border-b justify-between mb-4 font-lato">
          <p>Subtotal</p>
          <p className="">$59.00</p>
        </div>
        <div className="flex border-b justify-between mb-4 font-lato">
          <p>Shipping Fee</p>
          <p>Free!</p>
        </div>
        <div className="flex justify-between font-arimo mb-4 text-hero font-bold">
          <p>Total</p>
          <p>$59.00</p>
        </div>
        <button className="bg-checkout text-white p-3">PROCEED TO CHECKOUT</button>
      </div>
    </div>
  );
}

export default CartDetails
