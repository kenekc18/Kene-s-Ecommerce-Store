import {Link} from 'react-router-dom'
import {ShoppingCart} from 'phosphor-react'
import './navbar.css'

export const Navbar = () => {
  return (
    <div className="link-pages">
      <div className="links-tab">
        <Link to='/cart' className='nav-link'><ShoppingCart size={32}/></Link>
        <Link to='/shop'className='nav-link'>Shop</Link>
      </div>
    </div>
  )
}
