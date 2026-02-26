// src/components/Cart.jsx  (or wherever you want to place it)
import React from 'react';
import { Link } from 'react-router-dom'; // if using react-router, otherwise use <a href="/products">

// Optional: if you have a global cart context or state, import it here
// For this example we use dummy data – replace with your real cart logic

const dummyCartItems = [
  {
    id: 1,
    name: "Fresh Apples",
    price: 180,
    quantity: 2,
    unit: "kg",
    image: "/assets/img/Apple.jpg", // ← use your public path
  },
  {
    id: 3,
    name: "Ripe Bananas",
    price: 40,
    quantity: 3,
    unit: "dozen",
    image: "/assets/img/Banana.jpg",
  },
  {
    id: 8,
    name: "Fresh Tomatoes",
    price: 45,
    quantity: 1.5,
    unit: "kg",
    image: "/assets/img/Tomato.jpg",
  },
];

function Cart() {
  // In real app: get cart from context, localStorage, Redux, etc.
  const cartItems = dummyCartItems; // ← replace with real data

  const subtotal = cartItems.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  const deliveryCharge = subtotal >= 500 ? 0 : 50; // example rule
  const total = subtotal + deliveryCharge;

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center text-md-start">Your Cart</h2>

      {cartItems.length === 0 ? (
        // ── Empty Cart State ───────────────────────────────────────────────
        <div className="text-center py-5 my-5">
          <div className="mb-4">
            <img
              src="/assets/img/empty-cart.jpg" // ← put a nice empty cart image here
              alt="Empty shopping cart"
              className="img-fluid"
              style={{ maxHeight: '280px' }}
            />
          </div>
          <h4>Your cart is empty</h4>
          <p className="text-muted mb-4">
            Looks like you haven't added any fresh fruits, vegetables or grains yet.
          </p>
          <Link to="/products" className="btn btn-primary btn-lg px-5">
            Start Shopping
          </Link>
        </div>
      ) : (
        // ── Cart with items ─────────────────────────────────────────────────
        <div className="row">
          {/* Left column – Cart Items */}
          <div className="col-lg-8 mb-4 mb-lg-0">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="card mb-3 border-0 shadow-sm rounded-3"
              >
                <div className="row g-0 align-items-center p-3">
                  {/* Image */}
                  <div className="col-4 col-md-3 col-lg-2">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="img-fluid rounded"
                      style={{
                        height: '100px',
                        width: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </div>

                  {/* Details */}
                  <div className="col-8 col-md-9 col-lg-10 ps-3 ps-md-4">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <div>
                        <h5 className="mb-1">{item.name}</h5>
                        <p className="text-muted mb-1 small">
                          ₹{item.price} / {item.unit}
                        </p>
                      </div>
                      <button
                        className="btn btn-sm btn-outline-danger"
                        title="Remove item"
                      >
                        <i className="bi bi-trash"></i>
                      </button>
                    </div>

                    <div className="d-flex align-items-center">
                      <div className="input-group input-group-sm w-50 me-4">
                        <button className="btn btn-outline-secondary">-</button>
                        <input
                          type="number"
                          className="form-control text-center"
                          value={item.quantity}
                          min="0.5"
                          step="0.5"
                          readOnly // ← make editable later
                        />
                        <button className="btn btn-outline-secondary">+</button>
                      </div>
                      <div className="fw-bold">
                        ₹{(item.price * item.quantity).toFixed(0)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right column – Order Summary */}
          <div className="col-lg-4">
            <div className="card shadow-sm sticky-top" style={{ top: '20px' }}>
              <div className="card-body">
                <h5 className="card-title mb-4">Order Summary</h5>

                <div className="d-flex justify-content-between mb-2">
                  <span>Subtotal ({cartItems.length} items)</span>
                  <span>₹{subtotal.toFixed(0)}</span>
                </div>

                <div className="d-flex justify-content-between mb-2">
                  <span>Delivery Charges</span>
                  <span className={deliveryCharge === 0 ? "text-success" : ""}>
                    {deliveryCharge === 0 ? "Free" : `₹${deliveryCharge}`}
                  </span>
                </div>

                <hr />

                <div className="d-flex justify-content-between fw-bold fs-5">
                  <span>Total</span>
                  <span>₹{total.toFixed(0)}</span>
                </div>

                <button className="btn btn-success w-100 mt-4 py-3 fw-bold">
                  Proceed to Checkout
                </button>

                <Link
                  to="/products"
                  className="btn btn-outline-secondary w-100 mt-3"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;