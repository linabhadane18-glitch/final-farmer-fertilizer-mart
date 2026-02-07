import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import toast from "react-hot-toast";
import "./MyOrders.css";

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);
  const { axios, user } = useContext(AppContext);

  const fetchOrders = async () => {
    try {
      const { data } = await axios.get("/api/order/user");
      if (data.success) {
        setMyOrders(data.orders);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (user) {
      fetchOrders();
    }
  }, [user]);

  return (
    <div className="myorders-wrapper">
      <div>
        <p className="myorders-heading">My Orders</p>
      </div>

      {myOrders.map((order, index) => (
        <div key={index} className="order-container">
          <p className="order-header">
            <span>Order ID: {order._id}</span>
            <span>Payment: {order.paymentType}</span>
            <span>Total Amount: Rs.{order.amount}</span>
          </p>

          {order.items.map((item, index) => (
            <div
              key={index}
              className={`order-item ${
                order.items.length !== index + 1 ? "border-bottom" : ""
              }`}
            >
              <div className="order-product">
                <div className="order-image-container">
                  <img
                    src={`http://localhost:5000/images/${item.product.image[0]}`}
                    alt={item.product.name}
                    className="order-image"
                  />
                </div>

                <div className="order-product-details">
                  <h2 className="product-title">{item.product.name}</h2>
                  <p>{item.product.category}</p>
                </div>
              </div>

              <div className="order-info">
                <p>Quantity: {item.quantity || "1"}</p>
                <p>Status: {order.status}</p>
                <p>Date: {new Date(order.createdAt).toLocaleString()}</p>
              </div>

              <p className="order-amount">
                Amount: Rs.{item.product.offerPrice * item.quantity}
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MyOrders;
