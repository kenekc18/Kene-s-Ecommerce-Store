import { shopContxt } from "../../context/shopContxt"
import { useContext } from "react"


export const Product = (props) => {
  const {addToCart, cartItems} = useContext(shopContxt)
  function CartItem({ cartItemAmount }) {
        let content = null;
        if (cartItemAmount > 0) {
            content = <>({cartItemAmount})</>;
        }
        return content;
    }
  return (
    <div className="single-product">
      <img src={props.image}/>
      <div className="description">
        <p>{props.name}</p>
        <b></b>
        <p>${props.price}</p>
      </div>
      <button className="addToCartBtn" onClick={()=>{addToCart(props.id)}}>
        Add To Cart <CartItem cartItemAmount={cartItems[props.id]} />
      </button>
    </div>
  )
}
