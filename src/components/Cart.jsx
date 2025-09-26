import deleteIcon from '../assets/images/icon-delete.svg'

function Cart({ cartItems, removeFromCart, onClose }) {
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  return (
    <div className="cart-dropdown">
      <div className="cart-header">
        <h3>Cart</h3>
      </div>
      <div className="cart-content">
        {cartItems.length === 0 ? (
          <p className="cart-empty">Your cart is empty.</p>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item-image" />
                  <div className="cart-item-details">
                    <p className="cart-item-name">{item.name}</p>
                    <p className="cart-item-price">
                      ${item.price.toFixed(2)} x {item.quantity} <span className="cart-item-total">${(item.price * item.quantity).toFixed(2)}</span>
                    </p>
                  </div>
                  <button
                    className="cart-item-delete"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <img src={deleteIcon} alt="Delete" />
                  </button>
                </div>
              ))}
            </div>
            <button className="cart-checkout">Checkout</button>
          </>
        )}
      </div>
    </div>
  )
}

export default Cart