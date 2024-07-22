import React,{ lazy,Suspense}  from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RestaurantMenu from './components/RestaurantMenu.jsx';
import Contact from './Contact.jsx';
import About from './components/About.jsx';
import Error from './components/Error.jsx';
import Body from './components/Body.jsx';
import Cart from './components/Cart.jsx';
// import Grocery from './components/Grocery.jsx'; 

// chunking
// code splitting
// Dynamic Bundling
// lazy loading
// on demand loading
// dynamic import
const Grocery=lazy(()=> import("./components/Grocery.jsx"));


const appRouter=createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:
    [
      {
        path:"/",
        element: <Body /> 
      },    
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu/>,
      },
      {
        path:"/cart",
        element:<Cart/>
      }
    ],
    errorElement: <Error />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
reportWebVitals();
