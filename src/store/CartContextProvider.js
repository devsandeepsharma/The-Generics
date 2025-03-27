import { useState } from "react"

import CartContext from "./CartContext"

const CartContextProvider = (props) => {

    const [productsState, setProductsState] = useState([]);

    const addProducts = (product) => {
        setProductsState((prevProducts) => {
            const existingProductIndex = prevProducts.findIndex((prevProductsItem) => prevProductsItem.title === product.title);

            if(existingProductIndex != -1) {
                const updatedProducts = [...prevProducts];
                updatedProducts[existingProductIndex] = {
                    ...updatedProducts[existingProductIndex],
                    quantity: updatedProducts[existingProductIndex].quantity + 1
                }

                return updatedProducts;
            } else {
                return [...prevProducts, {...product, quantity: 1}];
            }
        })
    }

    const removeProducts = (product) => {
        setProductsState((prevProducts) => {
            return prevProducts.filter(prevProductsItem => prevProductsItem.title !== product.title)
        })
    }

    const contextData = {
        products: productsState,
        addProducts: addProducts,
        removeProducts: removeProducts
    }

    return (
        <CartContext.Provider value={contextData}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;