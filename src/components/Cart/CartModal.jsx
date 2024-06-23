import { forwardRef, useState, useImperativeHandle } from "react";
import { useSelector, useDispatch } from "react-redux";
import { checkoutActions } from "../../store/checkoutSlice";

import Button from "../UIElements/Button";
import Modal from "../UIElements/Modal";
import CartContent from "./CartContent";
import Checkout from "./Checkout";

const CartModal = forwardRef(function CartModal({title}, ref){

    const [showCheckout, setShowCheckout] = useState(false)
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();

    const cartItems = useSelector(state => state.cart.items)
    
    // 透過 ref 操作 Modal 的開關 
    useImperativeHandle(ref, () => ({
        open: () => {
            setIsOpen(true);
        },
        close: () => {
            setIsOpen(false);
        },
    }));
    
    //控制 Close 按鈕
    const handleClose = () => {
        setIsOpen(false)
    }

    // 使用者觸發 Checkout 按鈕顯示此區域
    const handleShowCheckout = () => {
        setShowCheckout(prevState => !prevState)
    }

    //控制 Checkout 裡面的提交按鈕
    const handleSubmit = () => {
        dispatch(checkoutActions.setSubmit(true))
        setIsOpen(false);
    }

    return(
        <Modal className="cart" open={isOpen}>
            <div>
                {!showCheckout && (<>
                    <h2>{title}</h2>
                    <CartContent/>
                    <div className="modal-actions">
                        <Button onClick={handleClose} btnClass="link-button">Close</Button>
                        {cartItems.length > 0 && <Button onClick={handleShowCheckout}>Checkout</Button>}
                    </div>
                    </>)}
                {showCheckout && <Checkout onBack={handleShowCheckout} onSubmit={handleSubmit}/>}
            </div>
        </Modal>
    )
});
export default CartModal