import {PRODUCTS} from '../../products'
import {Product} from './product'
import './shop.css'

export const Shop = () => {
  return (
    <div className="Shop">
      <div className="shop-title">
        <h2>Bnomly Garage Sale</h2>
      </div>
      <div className="All-products">
        {PRODUCTS.map((product)=>{
          return <Product name ={product.productName} price={product.price} 
          image={product.productImage} id={product.id} key= {product.id}/>
        })}
      </div>
    </div>
  )
}
