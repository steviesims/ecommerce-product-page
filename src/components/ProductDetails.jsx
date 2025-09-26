import { useState } from 'react'
import minusIcon from '../assets/images/icon-minus.svg'
import plusIcon from '../assets/images/icon-plus.svg'
import cartIcon from '../assets/images/icon-cart.svg'

function ProductDetails({ product, addToCart }) {
  const [quantity, setQuantity] = useState(0)

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1)
  }

  const decrementQuantity = () => {
    setQuantity(prev => Math.max(0, prev - 1))
  }

  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.discountPrice,
        quantity: quantity,
        image: product.images[0].thumbnail
      })
      setQuantity(0)
    }
  }

  return (
    <div className="product-details">
      <p className="product-company">{product.company}</p>
      <h1 className="product-title">{product.name}</h1>
      <p className="product-description">{product.description}</p>

      <div className="product-pricing">
        <div className="price-row">
          <span className="current-price">${product.discountPrice.toFixed(2)}</span>
          <span className="discount-badge">{product.discountPercentage}%</span>
        </div>
        <span className="original-price">${product.originalPrice.toFixed(2)}</span>
      </div>

      <div className="product-actions">
        <div className="quantity-selector">
          <button
            className="quantity-btn"
            onClick={decrementQuantity}
            disabled={quantity === 0}
          >
            <img src={minusIcon} alt="Decrease" />
          </button>
          <span className="quantity-display">{quantity}</span>
          <button className="quantity-btn" onClick={incrementQuantity}>
            <img src={plusIcon} alt="Increase" />
          </button>
        </div>

        <button
          className="add-to-cart-btn"
          onClick={handleAddToCart}
          disabled={quantity === 0}
        >
          <img src={cartIcon} alt="Cart" />
          Add to cart
        </button>
      </div>
    </div>
  )
}

export default ProductDetails