# The-Generics 🎸

This is a fun and experimental React project built for practicing **React Router DOM** and integrating Firebase for data handling.

[Live Preview](https://the-generics-gamma.vercel.app/)

## 🚀 Features

- **Home Page**:
  - Add and send movies to Firebase.
  - Fetch and display movies from Firebase using a button.

- **Store Page**:
  - Displays dummy product listings (like an e-commerce site).
  - Click on a product to view its details.
  - Add products to cart directly from the store.

- **Cart (Modal)**:
  - Opens as a modal from any page.
  - View cart items in a pop-up style component.
  - Remove items from the cart.

- **About Page**:
  - Simple static dummy page.

- **Contact Us Page**:
  - Basic dummy contact form.

## 🔧 Tech Stack

- React
- React Router DOM
- Bootstrap / React-Bootstrap
- Firebase (Realtime Database)
- Context API

## ⚛️ React Router v6 (Learnings)

### 📦 Install:

```bash
npm install react-router-dom
```

### 🔧 Setup:

```jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/store", element: <Store /> },
  { path: "/store/:productTitle", element: <Product /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
]);

<RouterProvider router={router} />
```

### 🔗 Navigate:

```jsx
<Link to="/store">Store</Link>
<NavLink to="/about">About</NavLink>
```

### 🧭 Programmatic Navigate:

```jsx
const navigate = useNavigate();
navigate("/store");
```

### 📌 Params:

```jsx
const { productTitle } = useParams();
```

### ❌ 404 Page:

```js
{ path: "*", element: <NotFound /> }
```