import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";


const useCartStore = create(persist((set,get) => ({
    cart: {
        1 : {
            "id": 1,
            "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
            "price": 109.95,
            "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            "category": "men's clothing",
            "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            "rating": {
            "rate": 3.9,
            "count": 120
            },
            "total":109.95,
            "numberInCart":1
        },
        2 : {
            "id": 2,
            "title": "Mens Casual Premium Slim Fit T-Shirts ",
            "price": 22.3,
            "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
            "category": "men's clothing",
            "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
            "rating": {
            "rate": 4.1,
            "count": 259
            },
            "total":22.3,
            "numberInCart":1
        },
        3 : {
            "id": 3,
            "title": "Mens Cotton Jacket",
            "price": 55.99,
            "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
            "category": "men's clothing",
            "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
            "rating": {
            "rate": 4.7,
            "count": 500
            },
            "total":55.99,
            "numberInCart":1
        }
    },
    numberInCart: 0,
    addToCart: (cartObj) => {
        return set((prevState) => ({ cart: {...prevState.cart, [cartObj.id]: cartObj}, numberInCart: prevState.numberInCart + 1 }))
    },
    removeFromCart: (id) => {
        let prevCart = get().cart
        delete prevCart[id]
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
        newProductObj.numberInCart += 1
        newProductObj.total = newProductObj.numberInCart * newProductObj.price
        return set(()=> ({ cart: {...prevCart, [id]:newProductObj}}))
    },
    decreaseNumberInCart:(id)=>{
        let prevCart = get().cart
        let newProductObj = prevCart[id] 
        newProductObj.numberInCart -= 1
        newProductObj.total = newProductObj.numberInCart * newProductObj.price
        return set(()=> ({ cart: {...prevCart, [id]:newProductObj}}))
    },

}),
    {
        name: "cart-storage",
        getStorage: createJSONStorage(()=> sessionStorage)
    }
))

export default useCartStore