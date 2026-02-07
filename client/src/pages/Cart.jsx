import { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import { dummyAddress } from "../assets/assets";
import axios from "axios";
import toast from "react-hot-toast";
import "./Cart.css"; // Import the plain CSS file

const Cart = () => {
  const {
    products,
    navigate,
    cartCount,
    totalCartAmount,
    cartItems,
    setCartItems,
    removeFromCart,
    updateCartItem,
    axios,
    user,
  } = useAppContext();

  const [cartArray, setCartArray] = useState([]);
  const [address, setAddress] = useState([]);
  const [showAddress, setShowAddress] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [paymentOption, setPaymentOption] = useState("COD");

  const getCart = () => {
    let tempArray = [];
    for (const key in cartItems) {
      const product = products.find((product) => product._id === key);
      if (product) {
        product.quantity = cartItems[key];
        tempArray.push(product);
      }
    }
    setCartArray(tempArray);
  };

  const getAddress = async () => {
    try {
      const { data } = await axios.get("/api/address/get");
      if (data.success) {
        setAddress(data.addresses);
        if (data.addresses.length > 0) {
          setSelectedAddress(data.addresses[0]);
        }
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (user) {
      getAddress();
    }
  }, [user]);

  useEffect(() => {
    if (products.length > 0 && cartItems) {
      getCart();
    }
  }, [products, cartItems]);

  const placeOrder = async () => {
    try {
      if (!selectedAddress) return toast.error("Please select an address");

      if (paymentOption === "COD") {
        const { data } = await axios.post("/api/order/cod", {
          items: cartArray.map((item) => ({
            product: item._id,
            quantity: item.quantity,
          })),
          address: selectedAddress._id,
        });

        if (data.success) {
          toast.success(data.message);
          setCartItems({});
          navigate("/my-orders");
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return products.length > 0 && cartItems ? (
    <div className="cart-wrapper">
      <div className="cart-left">
        <h1 className="cart-title">
          Shopping Cart <span>{cartCount()} Items</span>
        </h1>

        <div className="cart-header">
          <p>Product Details</p>
          <p style={{ textAlign: "center" }}>Subtotal</p>
          <p style={{ textAlign: "center" }}>Action</p>
        </div>

        {cartArray.map((product, index) => (
          <div key={index} className="cart-item">
            <div className="cart-product">
              <div
                onClick={() => {
                  navigate(`product/${product.category}/${product._id}`);
                  scrollTo(0, 0);
                }}
                className="cart-product-img"
              >
                <img
                  src={`http://localhost:5000/images/${product.image[0]}`}
                  alt={product.name}
                />
              </div>
              <div className="cart-product-info">
                <p>{product.name}</p>
                <div className="cart-product-weight">
                  <p>
                    Weight: <span>{product.weight || "N/A"}</span>
                  </p>
                  <div className="cart-product-qty">
                    <p>Qty:</p>
                    <select
                      onChange={(e) =>
                        updateCartItem(product._id, Number(e.target.value))
                      }
                      value={cartItems[product._id]}
                    >
                      {Array(
                        cartItems[product._id] > 9 ? cartItems[product._id] : 9
                      )
                        .fill("")
                        .map((_, index) => (
                          <option key={index} value={index + 1}>
                            {index + 1}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <p style={{ textAlign: "center" }}>
              Rs.{product.offerPrice * product.quantity}
            </p>
            <button
              onClick={() => removeFromCart(product._id)}
              className="cart-remove-btn"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m12.5 7.5-5 5m0-5 5 5m5.833-2.5a8.333 8.333 0 1 1-16.667 0 8.333 8.333 0 0 1 16.667 0"
                  stroke="#FF532E"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        ))}

        <button
          onClick={() => navigate("/products")}
          className="continue-shopping"
        >
          <svg
            width="15"
            height="11"
            viewBox="0 0 15 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.09 5.5H1M6.143 10 1 5.5 6.143 1"
              stroke="#615fff"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Continue Shopping
        </button>
      </div>

      <div className="cart-summary">
        <h2>Order Summary</h2>
        <hr />
        <div>
          <p className="delivery-address-label">Delivery Address</p>
          <div className="relative" style={{ position: "relative" }}>
            <div className="delivery-address">
              {selectedAddress
                ? `${selectedAddress.street}, ${selectedAddress.city}, ${selectedAddress.state}, ${selectedAddress.country}`
                : "No Address Found"}
            </div>
            <button
              onClick={() => setShowAddress(!showAddress)}
              className="change-address-btn"
            >
              Change
            </button>
            {showAddress && (
              <div className="address-dropdown">
                {address.map((addr, index) => (
                  <p
                    key={index}
                    onClick={() => {
                      setSelectedAddress(addr);
                      setShowAddress(false);
                    }}
                  >
                    {addr.street}, {addr.city}, {addr.state}, {addr.country}
                  </p>
                ))}
                <p
                  onClick={() => navigate("/add-address")}
                  className="add-address-link"
                >
                  Add address
                </p>
              </div>
            )}
          </div>

          <p className="payment-method-label">Payment Method</p>
          <select
            onChange={(e) => setPaymentOption(e.target.value)}
            className="payment-method-select"
          >
            <option value="COD">Cash On Delivery</option>
            <option value="Online">Online Payment</option>
          </select>
        </div>

        <hr />

        <div className="summary-pricing">
          <p>
            <span>Price</span>
            <span>Rs.{totalCartAmount()}</span>
          </p>
          <p>
            <span>Shipping Fee</span>
            <span className="text-green-600">Free</span>
          </p>
          <p>
            <span>Tax (2%)</span>
            <span>Rs.{(totalCartAmount() * 2) / 100}</span>
          </p>
          <p className="summary-total">
            <span>Total Amount:</span>
            <span>
              Rs.{totalCartAmount() + (totalCartAmount() * 2) / 100}
            </span>
          </p>
        </div>

        <button onClick={placeOrder} className="place-order-btn">
          {paymentOption === "COD" ? "Place Order" : "Proceed to Checkout"}
        </button>
      </div>
    </div>
  ) : null;
};

export default Cart;
