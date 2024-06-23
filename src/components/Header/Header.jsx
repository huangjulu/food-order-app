import logo from "../../assets/logo.jpg"
import { useRef } from "react"
import { useSelector } from "react-redux";

import CartModal from "../Cart/CartModal";
import Button from "../UIElements/Button"

export default function Header() {

    const cartItem = useSelector(state => state.cart.items)
    const cartModalRef = useRef()

    return(
        <header id="main-header">
            <div id="title">
                <img src={logo} alt="logo"/>
                <h1>Food Order App</h1>
                </div>
            <Button onClick={() => cartModalRef.current.open()}>Cart ({cartItem.length})</Button>
            <CartModal 
                ref={cartModalRef} 
                title="My Order" />
        </header>
    )
}