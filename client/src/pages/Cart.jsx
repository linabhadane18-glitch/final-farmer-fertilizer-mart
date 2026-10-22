import { useEffect, useState, useMemo } from "react";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";
import "./Cart.css";

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
  const [addresses, setAddresses] = useState([]);
  const [showAddressDropdown, setShowAddressDropdown] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [paymentOption, setPaymentOption] = useState("COD");

  /* =========================
     Build Cart Array
  ========================== */
  useEffect(() => {
    if (!products.length || !cartItems) return;

    const tempArray = Object.keys(cartItems).map((id) => {
      const product = products.find((item) => item._id === id);
      return product
        ? { ...product, quantity: cartItems[id] }
        : null;
    }).filter(Boolean);

    setCartArray(tempArray);
  }, [products, cartItems]);

  /* =========================
     Fetch Addresses
  ========================== */
  useEffect(() => {
    if (!user) return;

    const fetchAddresses = async () => {
      try {
        const { data } = await axios.get("/api/address/get");
        if (data.success) {
          setAddresses(data.addresses);
          if (data.addresses.length) {
            setSelectedAddress(data.addresses[0]);
          }
        } else {
          toast.error(data.message);
        }
      } catch (error) {
        toast.error(error.message);
      }
    };

    fetchAddresses();
  }, [user, axios]);

  /* =========================
     Pricing Calculations
  ========================== */
  const taxAmount = useMemo(
    () => (totalCartAmount() * 2) / 100,
    [totalCartAmount]
  );

  const finalAmount = useMemo(
    () => totalCartAmount() + taxAmount,
    [totalCartAmount, taxAmount]
  );

  /* =========================
     Place Order
  ========================== */
  const placeOrder = async () => {
    if (!selectedAddress) {
      return toast.error("Please select an address");
    }

    try {
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

  if (!products.length || !cartItems) return null;

  return (
    <div className="cart-wrapper">
      {/* ================= LEFT SECTION ================= */}
      <div className="cart-left">
        <h1 className="cart-title">
          Shopping Cart <span>{cartCount()} Items</span>
        </h1>

        <div className="cart-header">
          <p>Product Details</p>
          <p className="text-center">Subtotal</p>
          <p className="text-center">Action</p>
        </div>

        {cartArray.map((product) => (
          <div key={product._id} className="cart-item">
            <div className="cart-product">
              <div
                className="cart-product-img"
                onClick={() => {
                  navigate(`product/${product.category}/${product._id}`);
                  window.scrollTo(0, 0);
                }}
              >
                <img
                  src={`http://localhost:5000/images/${product.image[0]}`}
                  alt={product.name}
                />
              </div>

              <div className="cart-product-info">
                <p className="product-name">{product.name}</p>

                <div className="cart-product-meta">
                  <p>
                    Weight: <span>{product.weight || "N/A"}</span>
                  </p>

                  <div className="cart-product-qty">
                    <label>Qty:</label>
                    <select
                      value={cartItems[product._id]}
                      onChange={(e) =>
                        updateCartItem(
                          product._id,
                          Number(e.target.value)
                        )
                      }
                    >
                      {Array(
                        cartItems[product._id] > 9
                          ? cartItems[product._id]
                          : 9
                      )
                        .fill(null)
                        .map((_, i) => (
                          <option key={i + 1} value={i + 1}>
                            {i + 1}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center">
              Rs.{product.offerPrice * product.quantity}
            </p>

            <button
              className="cart-remove-btn"
              onClick={() => removeFromCart(product._id)}
            >
              Remove
            </button>
          </div>
        ))}

        <button
          className="continue-shopping"
          onClick={() => navigate("/products")}
        >
          ← Continue Shopping
        </button>
      </div>

      {/* ================= RIGHT SECTION ================= */}
      <div className="cart-summary">
        <h2>Order Summary</h2>
        <hr />

        <div className="summary-section">
          <p className="section-label">Delivery Address</p>

          <div className="delivery-address-wrapper">
            <div className="delivery-address">
              {selectedAddress
                ? `${selectedAddress.street}, ${selectedAddress.city}, ${selectedAddress.state}, ${selectedAddress.country}`
                : "No Address Found"}
            </div>

            <button
              className="change-address-btn"
              onClick={() =>
                setShowAddressDropdown(!showAddressDropdown)
              }
            >
              Change
            </button>

            {showAddressDropdown && (
              <div className="address-dropdown">
                {addresses.map((addr) => (
                  <p
                    key={addr._id}
                    onClick={() => {
                      setSelectedAddress(addr);
                      setShowAddressDropdown(false);
                    }}
                  >
                    {addr.street}, {addr.city}, {addr.state},{" "}
                    {addr.country}
                  </p>
                ))}

                <p
                  className="add-address-link"
                  onClick={() => navigate("/add-address")}
                >
                  + Add Address
                </p>
              </div>
            )}
          </div>

          <p className="section-label">Payment Method</p>

          <select
            className="payment-method-select"
            value={paymentOption}
            onChange={(e) => setPaymentOption(e.target.value)}
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
            <span className="free-shipping">Free</span>
          </p>

          <p>
            <span>Tax (2%)</span>
            <span>Rs.{taxAmount}</span>
          </p>

          <p className="summary-total">
            <span>Total Amount</span>
            <span>Rs.{finalAmount}</span>
          </p>
        </div>

        <button
          className="place-order-btn"
          onClick={placeOrder}
        >
          {paymentOption === "COD"
            ? "Place Order"
            : "Proceed to Checkout"}
        </button>
      </div>
    </div>
  );
};

export default Cart;