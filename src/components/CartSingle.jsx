import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";


function CartSingle({singleCartProp}) {
  const {id, title, price, total, numberInCart, removeFromCart, increaseNumberInCart, decreaseNumberInCart} = singleCartProp

  const [reduceBtnIsDisabled, setReduceBtnIsDisabled] = useState(false)
  const [addBtnIsDisabled, setAddBtnIsDisabled] = useState(false)


  const removeHandler = ()=> {
    removeFromCart(id)
  }

  const reduceBtnHandler = ()=> {
    decreaseNumberInCart(id)
  }

  const addBtnHandler = ()=> {
    increaseNumberInCart(id)
  }

  useEffect(()=> {
    if (numberInCart === 1) {
      setReduceBtnIsDisabled(true)
    }
    else{
      setReduceBtnIsDisabled(false)
    }
    if(numberInCart === 10) {
      setAddBtnIsDisabled(true)
    }
    else{
      setAddBtnIsDisabled(false)
    }
  }, [numberInCart])



  return (
    <tr className="font-lato">
      <th>
        <FaTimes onClick={removeHandler}/>
      </th>
      <th>{title}</th>
      <td>{`$${price}`}</td>
      <td className="">
        <div className="flex items-center gap-4">
          <button disabled={reduceBtnIsDisabled} onClick={reduceBtnHandler} className={`${reduceBtnIsDisabled ? "border-[#8A8A8A] text-[#8A8A8A]" : "border-[#1B1B1B] text-[#1B1B1B]"}
          flex justify-center items-center border-[1.5px] w-4 h-4 rounded-full`}>-</button> 
          <span>{numberInCart} </span>
          <button disabled={addBtnIsDisabled} onClick={addBtnHandler} className={`${addBtnIsDisabled ? "border-[#8A8A8A] text-[#8A8A8A]" : "border-[#1B1B1B] text-[#1B1B1B]"}
          flex justify-center items-center border-[1.5px] w-4 h-4 rounded-full`}>+</button>
        </div>
      </td>
      <td>{`$${total.toFixed(2)}`}</td>
    </tr>
  );
}

export default CartSingle;
