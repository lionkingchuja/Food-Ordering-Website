import React, { useEffect, useState } from "react";
import Shimer from "./Shimer";
import '../RestaurantMenu.css'; // Ensure the CSS file is imported
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
        // fetchMenu1();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
        const json = await data.json();
        setResInfo(json.categories);
    };

    const truncateDescription = (description, wordLimit) => {
        const words = description.split(' ');
        return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : description;
    };

    // const fetchMenu1 = async () => {
    //     const data = await fetch("https://api.spoonacular.com/recipes/random?number=5&apiKey=4da67ea746c04533be016b2c6978fa55");
    //     const json = await data.json();
    //     // setResInfo(json.categories);
    //     console.log(json);
    // };

    const dispatch =useDispatch();
    const handleAddItem=(categ)=>{
        //Dispatch an action
        dispatch(addItem(categ));
    }
    return resInfo === null ? <Shimer /> : (
        <div className="bahar">
            <h1>Jalaram Locho & Khaman</h1>
            <p>Plot no.437/1, Kumbhar Faliya, Opp. Gotalawadi tenament -c, Katargam</p>
            <h2>Menu</h2>
            <ul className="menu">
                {resInfo.map((categ) => (
                    <li key={categ.idCategory} className="menu-item">
                        <div className="menu-item-info">
                            <h3>{categ.strCategory}</h3>
                            <p>{truncateDescription(categ.strCategoryDescription, 14)}</p>
                        </div>
                        <img src={categ.strCategoryThumb} alt={categ.strCategory} className="menu-item-image" />
                        <button className="add-item-button"
                         onClick={() => handleAddItem(categ)}
                        >Add +</button>
                    </li>
                ))}
                <li className="menu-item">
                    <div className="menu-item-info">
                        <h3>Burgers</h3>
                        <p>{truncateDescription("Description for Burgers", 14)}</p>
                    </div>
                    <img src="https://via.placeholder.com/150" alt="Burgers" className="menu-item-image" />
                    <button className="add-item-button"
                    onClick={() =>handleAddItem("Burgers")}
                    >Add +</button>
                </li>
                <li className="menu-item">
                    <div className="menu-item-info">
                        <h3>Diet Coke</h3>
                        <p>{truncateDescription("Description for Diet Coke", 14)}</p>
                    </div>
                    <img src="https://via.placeholder.com/150" alt="Diet Coke" className="menu-item-image" />
                    <button className="add-item-button"
                     onClick={() =>handleAddItem("Diet Coke")}
                    >Add +</button>
                </li>
            </ul>
        </div>
    );
};

export default RestaurantMenu;
