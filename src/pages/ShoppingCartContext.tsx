import { iteratorSymbol } from "immer/dist/internal";
import {createContext, ReactNode, useContext, useState} from "react";
import { CartItem } from "./CartItem";
import Merch from "./Merch";
import { ShoppingCart } from "./ShoppingCart";

type ShoppingCartProviderProps = {
    children: ReactNode
}

type ShoppingCartContext ={
    openCart:()=>void
    closeCart:()=>void
    getItemQuantity: (id:number) => number
    increaseCartQuantity: (item:Merch ,id :number) => void
    decreaseCartQuantity: (item:Merch,id:number) => void
    removeFromCart: (item:Merch) => void
    addToCart:(item:Merch, id: number)=>void
    cartQuantity: number
    cartItems: Merch[],
    cartAmounts:CartAmount[]
}

export type CartAmount={
    id:number;
    quantity:number;
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart(){
    return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: 
    ShoppingCartProviderProps) {

        const [isOpen, setIsOpen ] =useState(false);

        const [cartAmounts,setCartAmounts] =useState<Array<CartAmount>>([])
       
        const [cartItems,setCartItems] = useState<Array<Merch>>([])

        const cartQuantity = cartAmounts.reduce( (quantity,item)=> item.quantity + quantity, 0)

        const openCart = () => setIsOpen(true)

        const closeCart = () => setIsOpen(false)
        function getItemQuantity(id:number){
            return cartAmounts.find(currItem => currItem.id === id) ?.quantity || 0
        }

        function increaseCartQuantity(item:Merch, id:number){
            if(cartAmounts.find(currItem => currItem.id === item.id) ==null)
                addToCart(item, id)
                else{
                    for (let index = 0; index < cartAmounts.length; index++) {
                        if(cartAmounts[index].id === id)
                        {
                            let temp = [...cartAmounts];
                            temp[index].quantity++;
                            setCartAmounts(temp);
                            setCartItems(cartItems);
                        } 
                        
                    }
                    }
                }
         function decreaseCartQuantity(item:Merch,id:number){
            
                if(cartItems.find(currItem => currItem.id === item.id)?.quantity ===1)
                    removeFromCart(item)
                else{
                    for (let index = 0; index < cartAmounts.length; index++) {
                        if(cartAmounts[index].id === id)
                        {
                            let temp = [...cartAmounts];
                            temp[index].quantity--;
                            setCartAmounts(temp);
                            setCartItems(cartItems);
                        } 
                        
                    }
                    }
                
            
        }
        function removeFromCart (item:Merch){
            setCartItems(currItems => {
                return currItems.filter(currItem => currItem.id !== item.id)
            })
            setCartAmounts(currItems => {
                return currItems.filter(currItem => currItem.id !== item.id)
            })
            
        }
        function addToCart (item:Merch, id:number){

            cartAmounts.push({id, quantity:1})
            setCartAmounts(cartAmounts)
            console.log(cartAmounts)
            setCartItems([...cartItems,item])
        }

    return ( 
        <ShoppingCartContext.Provider value={{getItemQuantity,increaseCartQuantity,addToCart, decreaseCartQuantity, removeFromCart,cartAmounts, cartItems, cartQuantity, openCart, closeCart}}>
            {children}
            <ShoppingCart items={cartItems} isOpen = {isOpen}/>
        </ShoppingCartContext.Provider>
    )
} 