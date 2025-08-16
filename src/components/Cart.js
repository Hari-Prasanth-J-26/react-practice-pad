import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    
    //Always subscribe to specific store slice
    const cartItems = useSelector((store) => store.cart.items);

    //less efficient
    /*
    const store = useSelector((store) => store);
    const cartItems = (store.cart.items);
    */

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">This is the cart</h1>
            <div className="w-6/12 m-auto">
                <button className="p-2 m-2 bg-black text-white rounded-lg hover:scale-110"
                onClick={handleClearCart}
                >Clear cart</button>
                {cartItems.length === 0 && <h1>Your cart is empty🫙... Please add items to the cart 🛒</h1>}
                <ItemList items={cartItems}/>
            </div>
        </div>
    )
}

export default Cart;