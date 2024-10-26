import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
// import UserContext from "../utils/userContext";
import {useSelector} from "react-redux";

const Header=()=>{
  const [name,setname]=useState("login")
  const onlinestatus =useOnlineStatus();
  // * if no dependency array => useEffect is called on every time render of the component
  // * if the dependency array is empty => useEffect is called only on the initial render(just once) of the component
  // * if the dependency array contains a dependency => useEffect is called everytime the value of the depencecy changes
  // * Dependency: A depency can be a state variable (or) a function

  // useEffect(() => {
  //   console.log(`useEffect Called`);
  // }, [btnNameReact]);
  //  const { loggedInUser }=useContext(UserContext);
 
  // subscribing to the store using a selector
  const cartItems= useSelector((store) => store.cart.items);
  
    return( 
      <div className="flex justify-between bg-slate-200">
        <div className="logo-container">
          <img  
          src="https://img.freepik.com/free-vector/detailed-chef-logo-template_23-2148986823.jpg?size=626&ext=jpg&ga=GA1.1.272873413.1711544711&semt=ais" 
          alt="logo"
          className="w-20 mx-6 mt-2"
          />
        </div>
        <div className="flex items-center">
          <ul className="flex p-4 m-4">
            {/* <li className="px-4">Online Status: {onlinestatus ? "✅":"🔴"}</li> */}
            <li className="px-4 hover:bg-slate-400 border rounded-lg"><Link to="/">Home</Link></li>
            <li className="px-4 hover:bg-slate-400 border rounded-lg"><Link to="/about">About Us</Link></li>
            <li className="px-4 hover:bg-slate-400 border rounded-lg"><Link to="/contact">contact Us</Link></li>
            <li className="px-4 hover:bg-slate-400 border rounded-lg"><Link to="/grocery">Grocery</Link></li>
            <li className="px-4 hover:bg-slate-400 border rounded-lg font-bold"><Link to="/cart">
            Cart-{cartItems.length} items</Link></li>
            <button className="px-3 hover:bg-slate-400 rounded-lg"
              onClick={()=>{
                name==="login"?setname("logout") :setname("login");
              }}
            >
              <h4>{name}</h4>
            </button>
            {/* <li className="px-4">{loggedInUser}</li> */}
          </ul>
        </div>
      </div>
    );
  };

export default Header;