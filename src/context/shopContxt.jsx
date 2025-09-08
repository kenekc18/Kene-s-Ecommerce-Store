import { createContext, useState} from "react";
import {PRODUCTS} from "../products"

export const shopContxt = createContext();

const getDefaultQty = () =>{
  let cart = {}
  for (let i = 1; i < PRODUCTS.length; i++){
    cart[i] = 0;
  } return cart
}

export const ShopContxtProvider = (props) => {
  let [cartItems, setCartItems] = useState(getDefaultQty())

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId) =>{
    setCartItems((prev)=>({...prev,[itemId]: prev[itemId]+ 1}))
  }
  const removeFromCart = (itemId) =>{
    setCartItems((prev)=>({...prev,[itemId]: prev[itemId] - 1}))
  }

  const updateCartItemCount = (newAmount, itemId) =>{
    setCartItems((prev)=>({...prev,[itemId]:newAmount}))
  }
  console.log(cartItems)
  return (
    <shopContxt.Provider value = {{cartItems, addToCart, removeFromCart, 
    updateCartItemCount, getTotalCartAmount}}>
      {props.children}
    </shopContxt.Provider>
  )
}
