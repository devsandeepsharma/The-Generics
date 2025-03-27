import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Store from "./components/pages/Store";
import About from "./components/pages/About";
import Home from "./components/pages/Home";

import CartContextProvider from "./store/CartContextProvider";

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    }, 
    {
      path: "/store",
      element: <Store />
    }, 
    {
      path: "/about",
      element: <About />
    }
  ])
  
  return (
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  )
}

export default App;