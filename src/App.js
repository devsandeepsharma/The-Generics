import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Store from "./components/pages/Store";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Product from "./components/pages/Product";

import CartContextProvider from "./store/CartContextProvider";

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    }, 
    {
      path: "/store",
      element: <Store />,
    }, 
    {
      path: "/store/:productTitle",
      element: <Product />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/contact",
      element: <Contact />
    }
  ])
  
  return (
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  )
}

export default App;