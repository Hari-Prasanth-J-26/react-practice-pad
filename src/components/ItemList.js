import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = ({items}) => {

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addItem(item));
    }

    return (
        <div>
            {items.map((item) => (
                <div data-testid="foodItems" key={item.card.info.id} className="py-2 my-2 border-gray-200 border-b-2 text-left flex justify-between">
                    
                    <div className="w-9/12">
                        <div className="py-2">
                            <span>{item.card.info.name}</span>
                            <span> - ₹ {item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice / 100}</span>   
                        </div>
                        <p className="text-xs">{item.card.info.description}</p>
                    </div>
                    <div className="w-3/12 py-4">
                        <div className="absolute my-24 px-12">
                            <button className="rounded-md w-20 bg-white text-green-600 hover:scale-110 transition"
                            onClick={() => handleAddItem(item)}
                            >ADD</button>
                        </div>
                        <img src={CDN_URL + item.card.info.imageId} className="rounded-lg"/>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ItemList;