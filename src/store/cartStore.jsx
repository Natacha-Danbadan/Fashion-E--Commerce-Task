import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";


const useCartStore = create(persist((set,get) => ({
    cart: {},
    numberInCart: 0,
    addToCart: (cartObj) => {
        return set((prevState) => ({ cart: {...prevState.cart, [cartObj.id]: cartObj}, numberInCart: prevState.numberInCart + 1 }))
    },
    removeFromCart: (id) => {
        let prevCart = get().cart
        delete prevCart[id]
        console.log('removed')
        return set((prevState) => ({ cart: prevCart, numberInCart: prevState.numberInCart - 1 }))
    },
    existsInCart: (id) => get().cart.hasOwnProperty(id),
    total:0,
    getTotal:()=>{
        let newTotal = Object.values(get().cart).reduce((acc, curr) => acc + curr.total ,0)
        return set(()=>({total:newTotal}))
    },

    increaseNumberInCart:(id)=>{
        let prevCart = get().cart
        let newProductObj = prevCart[id] 
        newProductObj.numberInSingleItemCart += 1
        newProductObj.total = newProductObj.numberInSingleItemCart * newProductObj.price
        return set(()=> ({ cart: {...prevCart, [id]:newProductObj}}))
    },
    decreaseNumberInCart:(id)=>{
        let prevCart = get().cart
        let newProductObj = prevCart[id] 
        newProductObj.numberInSingleItemCart -= 1
        newProductObj.total = newProductObj.numberInSingleItemCart * newProductObj.price
        return set(()=> ({ cart: {...prevCart, [id]:newProductObj}}))
    },
    removeAllFromCart:()=>{set({ cart: {}, numberInCart: 0 })}
}),
    {
        name: "cart-storage",
        storage: createJSONStorage(()=> sessionStorage)
    }
))

export default useCartStore