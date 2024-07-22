const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, costForTwo, sla, avgRating } =
    resData?.info;

  return (
    <div className="res-card m-4 p-4 w-[400px] bg-slate-200 rounded-lg hover:bg-slate-300 transition-all">
      <div>
        <img
          className="res-logo w-[450px] h-[250px] rounded-lg"
          alt="res-logo"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
        />
      </div>
      <div className="p-4 border rounded-lg shadow-2xl">
        <h3 className="font-bold text-lg">{name}</h3>
        <h4 className="mt-2 text-gray-500">{cuisines.join(", ")}</h4>
        <div className="flex items-center mt-3">
          <div className="flex items-center bg-orange-500 text-white text-sm font-bold px-2 py-1 rounded mr-2">
            <span className="mr-1">★</span>
            {avgRating}
          </div>
          <span className="text-gray-500 ml-14">{sla.deliveryTime} mins</span>
          <h4 className=" ml-16 text-gray-500">{costForTwo}</h4>
        </div>
      </div>
    </div>
  );
};

//high Order Component
//input - RestaurantCard => ResturantCardPromoted

export const withPromotedLabel=() =>{
  return (props) =>{
    return(
      <div>
        <label>Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
};


export default RestaurantCard;
