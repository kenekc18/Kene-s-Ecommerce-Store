import { shopContxt } from "../../context/shopContxt"
import { useContext } from "react"


export const CartItem = (props) => {
  const {cartItems, addToCart, removeFromCart, updateCartItemCount} = useContext(shopContxt)
  return (
    <div className="cartItem">
      <img src={props.image}/>

      <div className="cartInfo">
        <p><b>{props.name}</b></p>
        <p>${props.price}</p>

        <div className="countHandler">
          <button onClick={()=> removeFromCart(props.id)}> - </button>
          <input type="text" value={cartItems[props.id]} onChange={(e)=>updateCartItemCount(Number(e.target.value), props.id)}/>
          <button onClick={()=> addToCart(props.id)}> + </button>
        </div>
      </div>
    </div>
  )
}
