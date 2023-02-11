

function CheckingOut() {
  return (
    <div className="px-16 pt-4">
      <div>
        <h2 className="font-arimo font-bold text-4xl mb-6">Billing Details</h2>
        <form action="">
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="font-lato font-normal text-base text-grey mb-2"
            >
              Full Name
              <span className="text-asterik"> *</span>
            </label>
            <input
              type="text"
              name="name"
              className="border border-input mb-4 p-2 w-5/12 required"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="address"
              className="font-lato font-normal text-base text-grey mb-2"
            >
              Street Address
              <span className="text-asterik"> *</span>
            </label>
            <input
              type="text"
              name="address"
              placeholder="House number and street name"
              className="border border-input mb-4 p-2 w-5/12"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="town"
              className="font-lato font-normal text-base text-grey mb-2"
            >
              Town/City
              <span className="text-asterik"> *</span>
            </label>
            <input
              type="text"
              name="town"
              className="border border-input mb-4 p-2 w-5/12"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="phone"
              className="font-lato font-normal text-base text-grey mb-2"
            >
              Phone
              <span className="text-asterik"> *</span>
            </label>
            <input
              type="text"
              name="phone"
              className="border border-input mb-4 p-2 w-5/12"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor=""
              className="font-lato font-normal text-base text-grey mb-2"
            >
              Email Address
              <span className="text-asterik"> *</span>
            </label>
            <input
              type="email"
              name="email"
              className="border border-input mb-4 p-2 w-5/12"
            />
          </div>
        </form>
      </div>

      <div>
        <h2 className="font-arimo font-bold text-4xl mt-14 mb-6">Your Order</h2>
        <div className="mb-11">
          <div className="flex justify-between border border-input px-8 py-4">
            <p className="font-arimo font-bold">Product</p>
            <p className="font-arimo font-bold">Total</p>
          </div>

          <div className="flex justify-between border border-input px-8 py-4 font-lato text-grey">
            <p>Plain White Shirt</p>
            <p>$59.00</p>
          </div>

          <div className="flex justify-between border border-input px-8 py-4 font-lato">
            <p>Subtotal</p>
            <p>$59.00</p>
          </div>

          <div className="flex justify-between border border-input px-8 py-4 font-lato font-bold">
            <p></p>
            $59.00
          </div>
        </div>

        <div className="border border-input px-6">
          <div className="py-8">
            <p className="border border-input bg-stone-100 py-6 pl-4 font-lato text-grey">
              Cash on delivery. Please contact us if you require assistance or
              wish to make alternate arrangements.
            </p>
          </div>

          <div className="flex justify-between pb-14">
            <div></div>
            <button
              className="bg-orange text-white font-lato font-base py-3 px-9"
              
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default CheckingOut
