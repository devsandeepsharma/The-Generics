import { createContext } from "react";

const CartContext = createContext({
    products: [],
    addProducts: () => {},
    removeProducts: () => {}
})

export default CartContext;