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
                            <span className="text-sm font-bold md:text-lg lg:text-lg">{item.card.info.name}</span>
                            <span className="text-sm font-bold md:text-lg lg:text-lg"> - ₹ {item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice / 100}</span>   
                        </div>
                        <div className="text-xs md:text-sm lg:text-md">
                            <p>{item.card.info.description}</p>
                        </div>
                    </div>
                    <div className="w-5/12 md:w-4/12 lg:w-3/12 py-4">
                        <div className="absolute ml-[50px] mt-[90px] md:ml-[70px] md:mt-[110px] lg:ml-[80px] lg:mt-[130px]">
                            <button className="rounded-md w-11 md:w-14 lg:w-18 bg-white text-green-600 hover:scale-110 transition text-sm md:text-lg lg:text-lg"
                            onClick={() => handleAddItem(item)}
                            >ADD</button>
                        </div>
                        <img src={CDN_URL + item.card.info.imageId} className="rounded-lg m-2.5 lg:m-0 h-auto"/>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ItemList;