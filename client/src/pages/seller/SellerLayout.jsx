import { Link, NavLink, Outlet } from "react-router-dom";
import { assets } from "../../assets/assets";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";
import "./SellerLayout.css";

const SellerLayout = () => {
  const { setIsSeller, axios, navigate } = useAppContext();

  const sidebarLinks = [
    { name: "Add Product", path: "/seller", icon: assets.add_icon },
    { name: "Product List", path: "/seller/product-list", icon: assets.product_list_icon },
    { name: "Orders", path: "/seller/orders", icon: assets.order_icon },
  ];

  const logout = async () => {
    try {
      const { data } = await axios.get("/api/seller/logout");
      if (data.success) {
        setIsSeller(false);
        toast.success("Logged out successfully");
        navigate("/");
      }
    } catch {
      toast.error("Logout failed");
    }
  };

  return (
    <>
      {/* HEADER */}
      <header className="seller-header">
        <Link to="/" className="brand">
          🌱 <span>Maatisakha</span>
        </Link>

        <div className="header-controls">
          <span className="admin-tag">Admin Panel</span>
          <button onClick={logout} className="logout-button">
            Logout
          </button>
        </div>
      </header>

      {/* LAYOUT */}
      <div className="seller-layout">
        {/* SIDEBAR */}
        <aside className="sidebar">
          {sidebarLinks.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === "/seller"}
              className={({ isActive }) =>
                `sidebar-link ${isActive ? "active" : ""}`
              }
            >
              <img src={item.icon} alt="" />
              <span>{item.name}</span>
            </NavLink>
          ))}
        </aside>

        {/* CONTENT */}
        <main className="seller-content">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default SellerLayout;
