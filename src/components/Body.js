import RestaurantCart from "./RestaurantCart";
import restaurantList from "../utils/mockData";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantCart from "../utils/useRestaurantCart";
import UserContext from "../utils/UserContext";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

     useEffect(()=>{fetchData()}, []); 

    const fetchData = async () => {
        const data = await fetch(
      //"https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9698196&lng=77.7499721&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      //"https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
        const json = await data.json();
        //console.log(json);
        //setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
/*
    const resCart = useRestaurantCart();
    console.log("At body" + resCart);
    setListOfRestaurants(resCart);
    setFilteredRestaurants(resCart);
*/
    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) {
        return <h1>Looks like you're offline. Please check your internet connection...</h1>
    }

    const {loggedInUser, setUserName} = useContext(UserContext);

    //Conditional rendering
    return listOfRestaurants.length === 0 ? <Shimmer /> : 
    (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input type="text" data-testid="searchInput" className="border" value={searchText} onChange={(e) => {setSearchText(e.target.value)}} 
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                        const filteredRestaurant = listOfRestaurants.filter((res) =>
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredRestaurants(filteredRestaurant);
                        }
                    }}></input>
                    <button data-testid="resCard" className="px-4 py-1 bg-green-100 m-4 rounded-lg" onClick={()=>{console.log(searchText)
                        const filteredRestaurant = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestaurants(filteredRestaurant);
                    }}>Search</button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                    <button data-testid="resFilterCard" className="px-4 py-1 bg-blue-100 rounded-lg" onClick={()=> {const filteredList = listOfRestaurants.filter((res) => res?.info?.avgRating > 4.2)
                        setFilteredRestaurants(filteredList);
                    }}>Top Rated Restaurants</button>
                </div>
                <div className="m-4 p-4 flex items-center">
                    <label>User name: </label>
                    <input className="border border-black p-1" 
                    value={loggedInUser}
                    onChange={(e) => setUserName(e.target.value)}/>
                </div>                 
            </div>
            <div className="flex flex-wrap justify-center">
                {filteredRestaurants.map((restaurant) => {
                    //return <RestaurantCart key={restaurant?.info?.id} resData={restaurant?.info} />;
                    return <Link
                        key={restaurant?.info?.id}
                        to={"/restaurants/"+restaurant?.info?.id}
                    >
                    <RestaurantCart {...restaurant?.info} /></Link>;
                })}
            </div>
        </div>
    )
};

export default Body;