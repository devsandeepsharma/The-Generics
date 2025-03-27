import { useState } from "react";

import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Products from "./components/Products/Products";
import CartContextProvider from "./store/CartContextProvider";

const App = () => {
  const [handleCartShow, setHandleCartShow] = useState(false);

  const showCart = () => {
    setHandleCartShow(true);
  }

  const hideCart = () => {
    setHandleCartShow(false);
  }

  return (
    <CartContextProvider>
      {handleCartShow && <Cart show={showCart} onHide={hideCart} />}
      <Header onClick={showCart} />
      <main>
        <Products />
      </main>
    </CartContextProvider>
  )
}

export default App;