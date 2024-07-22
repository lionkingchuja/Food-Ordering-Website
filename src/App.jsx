import './App.css';
import React, { useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import Body from './components/Body.jsx';
import Footer from './components/Footer.jsx';

import ReactDom from 'react-dom/client';
import { createBrowserRouter, RouterProvider ,Outlet} from 'react-router-dom';
import Contact from './Contact.jsx';
import About from './components/About.jsx';
import Error from './components/Error.jsx';
import UserContext from './utils/userContext.jsx';
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  const [userName,setUserName]=useState();

  //authentication
  useEffect(()=>{
    //make an api call and send username and password
    const data={
      name:"vivek kumar",
    }
    setUserName(data.name);
  },[])

  return (
    <Provider store={appStore}>
       <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
        <div className="App">
          <Header/>
          <Outlet />
          <Footer />
        </div>
      </UserContext.Provider>
    </Provider>
  );
}

// const appRouter=createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <Error />,
//   },
//   {
//     path: "/about",
//     element: <About />,
//   },
//   {
//     path: "/contact",
//     element: <Contact />,
//   },
// ]);

// const root=ReactDom.createRoot(document.getElementById('root'));
// root.render(<RouterProvider router={appRouter} />);
export default App;