import { useState } from "react";

import Cart from "../Cart/Cart";
import Header from "../Layout/Header";
import Products from "../Products/Products";
import Footer from "../Layout/Footer";

const Store = () => {
    const [handleCartShow, setHandleCartShow] = useState(false);

    const showCart = () => {
        setHandleCartShow(true);
    }

    const hideCart = () => {
        setHandleCartShow(false);
    }

    return (
        <>
            {handleCartShow && <Cart show={showCart} onHide={hideCart} />}
            <Header onClick={showCart} />
            <main>
                <Products />
            </main>
            <Footer />
        </>
    )
}

export default Store;