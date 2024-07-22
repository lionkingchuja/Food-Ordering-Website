import { useDispatch, useSelector } from "react-redux";
import '../RestaurantMenu.css';
import { clearCart } from "../utils/cartSlice";

const Cart=()=>{
    const cartItems=useSelector((store)=>store.cart.items)

    const dispatch=useDispatch();
    const handleClearCart=()=>{
        dispatch(clearCart())
    };
    return (
    <div className="text-center m-2 p-3">
        <h1 className="text-3xl font-bold w-1/12 m-auto text-indigo-500 bg-gradient-to-r from-slate-300 to-gray-300 p-3 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl">
            Cart
        </h1>
        <div className="w-6/12 m-auto">
            <ul className="menu">
                {cartItems.map((categ) => (
                    <li key={categ.idCategory} className="menu-item">
                        <div className="menu-item-info">
                            <h3>{categ.strCategory}</h3>
                        </div>
                        <img src={categ.strCategoryThumb} alt={categ.strCategory} className="menu-item-image" />
                    </li>
                ))}
            </ul>
        </div>
        {cartItems.length===0 ?
            <h3 className="font-serif w-6/12 m-auto text-2xl font-bold text-indigo-400 bg-gradient-to-r from-slate-300 to-gray-300 p-3 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl">
            Cart is empty. Add Items to the Cart
            </h3>
        :
        <button className="p-2 m-2 bg-slate-300 rounded-lg hover:bg-slate-400"
        onClick={handleClearCart}
        >Clear Cart</button>
        }
    </div>
    );
};

export default Cart;