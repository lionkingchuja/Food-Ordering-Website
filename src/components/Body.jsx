import RestaurantCard,{withPromotedLabel} from "./ResturantCard.jsx";
// import { resList }  from "../utils/resList.jsx";
import { useState ,useEffect, useContext} from "react";
import Shimer from "./Shimer.jsx";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.jsx";
import UserContext from "../utils/userContext.jsx";

const Body=()=>{
  
  const {loggedInUser,setUserName}=useContext(UserContext);

    // Local State Variable - Super powerful variable
    const [listOfRes, setlistOfRes]= useState([]);
    const [filterdListOfRes, setfilteredListOfRes]= useState([]);
    const [searchText,setsearchtext] =useState("");
    console.log(listOfRes);
    const RestaurantCardPromoted =withPromotedLabel(RestaurantCard);
    // whenever state variables update, react triggers a reconcilation cycle(re-renders the component)
    useEffect(()=>{
      fetchData();
    },[]);

    const fetchData=async ()=>{
      const data= await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      
      const json=await data.json();
      // console.log(json);
      //optional chaining
      setlistOfRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setfilteredListOfRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const onlinestatus =useOnlineStatus();

    if(onlinestatus === false)
      return (
        <h1>
          Looks like you're offline !! Please check your internet connection;
        </h1>
    );

    
    
    //conditional Rendering
    if(listOfRes.length === 0){
      return <Shimer />;
    }

    return(
      <div className="body">
        <div className="filter flex">
          <div className="search m-2 p-2">
            <input
              type="text"
              placeholder="Search a restaurant you want..."
              className="search-box w-64"
              value={searchText}
              onChange={(e)=>{
                setsearchtext(e.target.value);
              }}
            >
            </input>

            <button className="px-4 py-2 bg-slate-300 m-4 rounded-lg hover:bg-slate-400"
            onClick={()=>{
              const filterdListOfRes=listOfRes.filter(
                (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredListOfRes(filterdListOfRes);
            }}>Search</button>
          </div>
          <button
            className="px-2 h-12 mt-7 bg-slate-300 m-4 rounded-lg hover:bg-slate-400"
            onClick={()=>{
              const filteredList=listOfRes.filter(
                (res)=>res.info.avgRating >4
              );
              setfilteredListOfRes(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
          {/* <div>
            <label>UserName:</label>
            <input className="px-2 h-9 mt-7 bg-slate-300 m-4 rounded-lg hover:bg-slate-400"
              value={loggedInUser}
              onChange={(e)=> setUserName(e.target.value)}
            />
          </div> */}
        </div>
        <div className="flex flex-wrap justify-center">
          {/* <RestaurantCard resData={resList[0]}/>
          <RestaurantCard resData={resList[1]}/>
          <RestaurantCard resData={resList[2]}/>
          <RestaurantCard resData={resList[3]}/> */}
          
           {/* not using keys (not acceptable) <<<< index as a key <<<<<<<<<< unique id (is the best  practice) */}

          {filterdListOfRes.map((items) => (
            <Link
              key={items.info.id}
              to={"/restaurants/"+ "123"}
              style={{ textDecoration: 'none', color:'black' }}
            >
            {
              items.info.promoted ? (
                <RestaurantCardPromoted resData={items}/>
              ):(
                <RestaurantCard resData={items} />
              )}
            </Link>
          ))};
        </div>
      </div>
    )
  }

export default Body;