import { createContext, useState, useEffect } from 'react';

export const SingleItemContext = createContext()

function ProductProvider({children}){
    const[products, setProducts] = useState([])
    useEffect(() => {
        const fetchProducts = async() =>{
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setProducts(data);
            // console.log(data);
        };
        fetchProducts();
    },[])

    return <SingleItemContext.Provider value= {{ products }}>{children}</SingleItemContext.Provider>
}

export default ProductProvider