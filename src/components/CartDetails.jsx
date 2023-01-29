

function CartDetails() {
  return (
    <div className="">
      <div className="overflow-x-auto mb-4">
        <table className="table table-compact w-full">
          <thead className="font-arimo font-bold text-hero">
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className="font-lato">
              <th>Plain White Shirt</th>
              <td>$59</td>
              <td className="badge badge-ghost">1</td>
              <td>$59</td>
            </tr>
            <tr className="font-lato">
              <th>Plain White Shirt</th>
              <td>$59</td>
              <td className="badge badge-ghost">2</td>
              <td>$59</td>
            </tr>
            <tr className="font-lato">
              <th>Plain White Shirt</th>
              <td>$59</td>
              <td className="badge badge-ghost">3</td>
              <td>$59</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="w-1/2">

      </div>
    </div>
  );
}

export default CartDetails
