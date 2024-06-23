import { useContext } from "react"
import { useDispatch } from "react-redux";

import Button from "../../UIElements/Button"
import { MealContext } from "../../../components/Container/MealItem/Meal"
import { cartActions } from "../../../store/cartItemSlice";

//呈現每個 MealItem 卡片內容
export default function MealItem(){
    const meals = useContext(MealContext)
    const dispatch = useDispatch()

    const addToCartHandler = (meal)=>{
        dispatch(cartActions.addToCart(meal))
    }

    return <>
        {meals.map((meal)=>
            <li className='meal-item' key={meal.id}>
                <article>
                    <img src={`/backend/public/${meal.image}`}  alt={meal.name} />
                    <div>
                        <h3>{meal.name}</h3>
                        <p className="meal-item-description">{meal.description}</p>
                        <p className="meal-item-price">$ {meal.price}</p>
                    </div>
                    <div className="meal-item-actions">
                        <Button btnClass="text-button" onClick={()=>addToCartHandler(meal)}>Add to Cart</Button>
                    </div>
                </article>
            </li>
            )}
    </>
}