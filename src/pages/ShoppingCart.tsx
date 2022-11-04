import { faMapSigns } from "@fortawesome/free-solid-svg-icons";
import  Axios  from "axios";
import { useEffect } from "react";
import { Offcanvas, Stack } from "react-bootstrap";
import { CartItem } from "./CartItem";
import Merch from "./Merch";
import { useShoppingCart } from "./ShoppingCartContext";
import { formatCurrency } from "./utilities/formatCurrency";

type ShoppingCartProps = {
    isOpen :boolean
    items: Merch[]
}

const map = new Map();

function mapMerch(data: Merch[]){
    for (let index = 0; index < data.length; index++) {
        map.set(data[index].id, data[index])
        console.log(data[index].id)
    }
}
export function ShoppingCart({isOpen}: ShoppingCartProps, {items}:ShoppingCartProps){
    const {closeCart, cartItems, cartAmounts} = useShoppingCart()
    
    return(
        <Offcanvas show = {isOpen} onHide={closeCart} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap = {3}>
                    {cartItems.map(item =>(
                        <CartItem item={item} key = {item.id} {...item} cart={cartAmounts.find(curritem => curritem.id === item.id)! }/>
                        
                    ))}
                    <div className="ms-auto fw-bold fs-5">
                        Total {formatCurrency(
                            cartAmounts.reduce((total,cartAmount)=>{
                                const item = cartItems.find(i => i.id === cartAmount.id)!
                                return total +parseInt(item.price!)*cartAmount.quantity
                            },0)
                        )}
                    </div>
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    )
}