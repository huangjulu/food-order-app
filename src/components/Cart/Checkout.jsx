import { useSelector, useDispatch } from "react-redux";
import { checkoutActions } from "../../store/checkoutSlice";

import Button from "../UIElements/Button";
import Input from "../UIElements/Input";

export default function CheckOut({onBack, onSubmit}){
    const cartTotal = useSelector(state => state.cart.total);
    const cartItems = useSelector(state => state.cart.items);
    const dispatch = useDispatch();
    
    //讓 Checkout 資料提交給後端(網址參考用)
    const handleSubmit = (e) => {
        e.preventDefault();
        const fd = new FormData(e.target);
        const customerData = Object.fromEntries(fd.entries());

        dispatch(checkoutActions.setSubmit(true));
        dispatch(checkoutActions.getCustomerData(customerData));

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                order: {
                    items: cartItems,
                    customer: customerData,
                },
            }),
        }).then(response => response.json())
            .then(customerData => {
                console.log('Success:', customerData);
                dispatch(checkoutActions.setSubmit(false));
            })
            .catch(error => {
                console.error('Error:', error);
                dispatch(checkoutActions.setSubmit(false));
            });
        }

    return(
        <div className="control">
            <h2>Checkout</h2>
            <h3>Total: ${cartTotal.toFixed(2)}</h3>
                <Input type="text" label="Name"/>
                <Input type="text" label="Address" />
                <Input type="number" label="Phone"/>
                <Input type="email" label="Email"/>
            <form onSubmit={handleSubmit}>
                <div className="checkout-items-actions">
                    <Button btnClass="link-button" onClick={onBack}>Back</Button>
                    <Button onClick={onSubmit}>Submit</Button>
                </div>
            </form>
        </div>
    )
}