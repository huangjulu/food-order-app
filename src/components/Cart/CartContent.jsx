import Button from "../UIElements/Button";

import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/cartItemSlice";

//組合 ModalContent 內容
export default function Cart() {
        const dispatch = useDispatch()

        const cartItems = useSelector(state => state.cart.items)
        const totalPrice = useSelector(state => state.cart.total);

        const formatTotalPrice = `$${totalPrice.toFixed(2)}`;

        //項目增加鍵
        const incrementHandler = (meal)=>{
            dispatch(cartActions.addToCart(meal))
            
        }
        //項目減少鍵
        const decrementHandler = (meal)=>{
            dispatch(cartActions.removeFromCart(meal))
        }

        return(
            <>
            {cartItems.length > 0 && (
                <>
                {cartItems.map((meal)=>{
                return(   
                    <ul key={meal.id} >
                        <li className="cart-item"><p>{meal.name} - {meal.quantity} X ${meal.price}</p>
                            <div className="cart-item-actions">
                                    <Button onClick={()=> decrementHandler(meal)}>-</Button>
                                    {meal.quantity}
                                    <Button onClick={()=> incrementHandler(meal)}>+</Button>
                            </div>
                        </li>
                    </ul>
                )
                })}
                <div className="cart-total">Total: {formatTotalPrice}</div>
                </>
                )}
            
            {cartItems.length === 0 && (
                <ul className="cart-item">
                    <li>Cart is empty</li>
                </ul>
            )}
            </>
        )
    }