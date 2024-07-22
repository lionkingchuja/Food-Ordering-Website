import { useEffect, useState } from "react";

const useRestaurantMenu =()=>{
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
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
    return resInfo;
}

export default useRestaurantMenu;
