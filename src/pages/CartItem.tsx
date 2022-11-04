import { Button } from "react-bootstrap"
import Stack from "react-bootstrap/esm/Stack"
import Merch from "./Merch"

import { useShoppingCart,CartAmount } from "./ShoppingCartContext"
import { formatCurrency } from "./utilities/formatCurrency"

type CartItemProps ={
    cart:CartAmount
    item: Merch
}

export function CartItem({cart,item}:CartItemProps){
    const {removeFromCart} = useShoppingCart()
    
    if (item === null) return null
    return(
        <Stack direction ="horizontal" gap ={2} className="d-flex">
            <img
                src={item.imgURL}
                style= {{width:"125px", height:"75px",objectFit:"cover"}}

            />
            <div className="me-auto">
                <div>
                    {item.description}{" "}{cart.quantity>1 && <span className="text-muted" style={{fontSize:".65rem"}}> x{cart.quantity}</span>}
                </div>
                <div className="text-muted" style={{fontSize:".75rem"}}>
                {formatCurrency(parseInt(item.price))}
            </div>
            </div>
            <div>{formatCurrency(parseInt(item.price) * cart.quantity)}</div>
            <Button variant="outline-danger" size ="sm" onClick={()=> removeFromCart(item)}>x</Button>
            
        </Stack>
    )
}