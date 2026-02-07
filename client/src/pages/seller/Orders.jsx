import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { toast } from "react-hot-toast";
import "./Orders.css"; // Import plain CSS

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { axios } = useContext(AppContext);

  const fetchOrders = async () => {
    try {
      const { data } = await axios.get("/api/order/seller");
      if (data.success) {
        setOrders(data.orders);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="orders-container">
      <h2 className="orders-title">Orders List</h2>
      {orders.map((order, index) => (
        <div key={index} className="order-card">
          <div className="order-products">
            <img
              className="product-img"
              src={`http://localhost:5000/images/${order.items[0].product.image[0]}`}
              alt="boxIcon"
            />
            <>
              {order.items.map((item, index) => (
                <div key={index} className="product-details">
                  <p className="product-name">
                    {item.product.name}
                    {item.quantity >= 2 && (
                      <span className="product-qty"> x {item.quantity}</span>
                    )}
                  </p>
                </div>
              ))}
            </>
          </div>

          <div className="order-address">
            <p className="address-name">
              {order.address.firstName} {order.address.lastName}
            </p>
            <p>
              {order.address.street}, {order.address.city},{" "}
              {order.address.state}, {order.address.zipcode},{" "}
              {order.address.country}
            </p>
          </div>

          <p className="order-amount">Rs.{order.amount}</p>

          <div className="order-info">
            <p>Method: {order.paymentType}</p>
            <p>Date: {order.orderDate}</p>
            <p>Payment: {order.isPaid ? "Paid" : "Pending"}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Orders;
