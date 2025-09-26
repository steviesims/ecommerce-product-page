import { useState } from 'react'
import logoSvg from '../assets/images/logo.svg'
import cartIcon from '../assets/images/icon-cart.svg'
import menuIcon from '../assets/images/icon-menu.svg'
import closeIcon from '../assets/images/icon-close.svg'
import avatar from '../assets/images/image-avatar.png'
import Cart from './Cart'

function Header({ cartItems, removeFromCart }) {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0)

  return (
    <header className="header">
      <div className="header-container">
        <div className={`header-left ${isMobileMenuOpen ? 'nav-open' : ''}`}>
          <button
            className="mobile-menu-button"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <img src={menuIcon} alt="Menu" />
          </button>

          <img src={logoSvg} alt="sneakers" className="logo" />

          <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
            <div className="nav-overlay" onClick={() => setIsMobileMenuOpen(false)}></div>
            <div className="nav-content">
              <button
                className="nav-close"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <img src={closeIcon} alt="Close" />
              </button>
              <ul className="nav-list">
                <li><a href="#" className="nav-link">Collections</a></li>
                <li><a href="#" className="nav-link">Men</a></li>
                <li><a href="#" className="nav-link">Women</a></li>
                <li><a href="#" className="nav-link">About</a></li>
                <li><a href="#" className="nav-link">Contact</a></li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="header-right">
          <div className="cart-container">
            <button
              className="cart-button"
              onClick={() => setIsCartOpen(!isCartOpen)}
            >
              <img src={cartIcon} alt="Cart" />
              {cartItemsCount > 0 && (
                <span className="cart-badge">{cartItemsCount}</span>
              )}
            </button>
            {isCartOpen && (
              <Cart
                cartItems={cartItems}
                removeFromCart={removeFromCart}
                onClose={() => setIsCartOpen(false)}
              />
            )}
          </div>
          <img src={avatar} alt="Avatar" className="avatar" />
        </div>
      </div>
    </header>
  )
}

export default Header