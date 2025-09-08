import {PRODUCTS} from '../../products'
import { shopContxt } from '../../context/shopContxt'
import { useContext } from 'react'
import {CartItem} from './cart-item'
import {useNavigate} from 'react-router-dom'
import './cart.css'


export const Cart = () => {
  const {cartItems,getTotalCartAmount} = useContext(shopContxt)
  const totalAmount = getTotalCartAmount()

  const Navigate = useNavigate()

  return (
    <div className='cart'>
      <div className="title"><b>Your Cart Items</b></div>
      <div className="cartProducts">
        {PRODUCTS.map((product)=>{
          if (cartItems[product.id] > 0){
            return <CartItem name ={product.productName} price={product.price} 
            image={product.productImage} id ={product.id} key={product.id}/>
          }
        })}
      </div>
      <div className="Checkout">
        <p>Subtotal: ${totalAmount}</p>
        <button onClick={()=>Navigate('/shop')}>Continue Shopping</button>
        <button>Checkout</button>
      </div>
    </div>
  )
}
