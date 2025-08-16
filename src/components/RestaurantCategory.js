import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems, setShowIndex}) => {

    const symbolDown = "⌄";
    const symbolUp = "^";

    const handleClick = () => {
        setShowIndex();
    }

    return (
        <div>
            <div className="w-6/12 mx-auto my-4 bg-gray-100 p-4 shadow-lg">
                <div className="flex justify-between cursor-pointer"
                onClick={handleClick}
                > 
                    <span className="font-bold text-lg">
                        {data.title} ({data.itemCards.length})
                    </span>
                    <span className="text-2xl">{showItems ? symbolUp: symbolDown}</span>
                </div>
                {showItems && <ItemList items={data.itemCards}/>}
            </div>
        </div>
    )
}

export default RestaurantCategory;