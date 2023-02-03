import { FaTimes } from "react-icons/fa";

function CartSingle() {
  return (
    <tr className="font-lato">
      <th>
        <FaTimes />
      </th>
      <th>Plain White Shirt</th>
      <td>$59</td>
      <td className="">1</td>
      <td>$59</td>
    </tr>
  );
}

export default CartSingle;
