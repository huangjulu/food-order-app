
import { useSelector } from "react-redux";

import Button from "../UIElements/Button";
import Input from "../UIElements/Input";

export default function CheckOut({onBack, onSubmit}){
    const cartTotal = useSelector(state => state.cart.total);
    const cartItems = useSelector(state => state.cart.items);
    
    //讓 Checkout 資料提交給後端(網址參考用)
    const handleSubmit = (e) => {
        e.preventDefault();

        const fd = new FormData(e.target);
        const customerData = Object.fromEntries(fd.entries());

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
          })
          .catch(error => {
              console.error('Error:', error);
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
            <div style={{display: 'flex', gap: '10px', width: '100%', justifyContent: 'flex-end'}}>
                <Button btnClass="link-button" onClick={onBack}>Back</Button>
                <form onSubmit={handleSubmit}>
                    <Button onClick={onSubmit}>Submit</Button>
                </form>
            </div>
        </div>
    )
}