import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Navbar} from './components/Navbar'
import {Shop} from './pages/shop/Shop'
import {Cart} from './pages/cart/Cart'
import { ShopContxtProvider } from './context/shopContxt'

import './App.css'

function App() {
  return (
    <div className="App">
      <ShopContxtProvider>
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/shop' element={<Shop/>}/>
          </Routes>
        </Router>
      </ShopContxtProvider>
    </div>
  )
}

export default App
