import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import toast from "react-hot-toast";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const {
    user,
    setUser,
    showUserLogin,
    setShowUserLogin,
    navigate,
    searchQuery,
    setSearchQuery,
    cartCount,
    axios,
  } = useAppContext();

  const logout = async () => {
    try {
      const { data } = await axios.get("/api/user/logout");
      if (data.success) {
        setUser(null);
        navigate("/");
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (searchQuery.length > 0) {
      navigate("/products");
    }
  }, []);

  return (
    <header className="nav-wrapper">
      <nav className="nav-inner">
        {/* Brand */}
        <Link to="/" className="nav-logo">
          🌾 Maatisakha
        </Link>

        {/* Desktop Menu */}
        <div className="nav-links desktop-only">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/AboutUs">About Us</Link>
          <Link to="/weather">Weather</Link>
          <Link to="/blogs">Blogs</Link>

          <div className="nav-search">
            <input
              type="text"
              placeholder="Search fertilizers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <span>🔍</span>
          </div>

          <div className="nav-cart" onClick={() => navigate("/cart")}>
            🛒
            <span>{cartCount()}</span>
          </div>

          {user ? (
            <div className="nav-profile">
              <img src={assets.profile_icon} alt="profile" />
              <ul>
                <li onClick={() => navigate("/my-orders")}>My Orders</li>
                <li onClick={logout}>Logout</li>
              </ul>
            </div>
          ) : (
            <button
              className="nav-login"
              onClick={() => {
                setOpen(false);
                setShowUserLogin(true);
              }}
            >
              Login
            </button>
          )}
        </div>

        {/* Mobile Controls */}
        <div className="mobile-only nav-mobile-icons">
          <div className="nav-cart" onClick={() => navigate("/cart")}>
            🛒
            <span>{cartCount()}</span>
          </div>
          <button className="menu-btn" onClick={() => setOpen(!open)}>
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`nav-mobile-menu ${open ? "show" : ""}`}>
        <Link onClick={() => setOpen(false)} to="/">Home</Link>
        <Link onClick={() => setOpen(false)} to="/products">Products</Link>
        <Link onClick={() => setOpen(false)} to="/AboutUs">About Us</Link>
        <Link onClick={() => setOpen(false)} to="/blogs">Blogs</Link>

        {user ? (
          <>
            <span onClick={() => navigate("/my-orders")}>My Orders</span>
            <span onClick={logout}>Logout</span>
          </>
        ) : (
          <button
            className="nav-login"
            onClick={() => {
              setOpen(false);
              setShowUserLogin(true);
            }}
          >
            Login
          </button>
        )}
      </div>
    </header>
  );
};

export default Navbar;
