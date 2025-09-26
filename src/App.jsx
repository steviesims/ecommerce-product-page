import { useState } from 'react'
import Header from './components/Header'
import ProductPage from './components/ProductPage'
import './App.css'

function App() {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id)

    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + product.quantity }
          : item
      ))
    } else {
      setCartItems([...cartItems, product])
    }
  }

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId))
  }

  return (
    <div className="app">
      <Header cartItems={cartItems} removeFromCart={removeFromCart} />
      <ProductPage addToCart={addToCart} />
    </div>
  )
}

export default App