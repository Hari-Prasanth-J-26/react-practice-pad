import { useEffect, useState } from "react";
import {RES_CART_URL} from "../utils/constants";

const useRestaurantCart = () => {

    const [resCart, setResCart] = useState("Hello");

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () => {
        //const data = await fetch(RES_CART_URL);
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9698196&lng=77.7499721&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log("From "+json)
        const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        console.log(restaurants);
        //setResCart(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setResCart(restaurants);
    }

    return resCart;    
}

export default useRestaurantCart;