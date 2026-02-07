import toast from "react-hot-toast";
import { useAppContext } from "../../context/AppContext";
import React, { useState, useEffect } from "react";
import "./SellerLogin.css";

const SellerLogin = () => {
  const { isSeller, setIsSeller, navigate, axios } = useAppContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (isSeller) {
      navigate("/seller");
    }
  }, [isSeller]);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const { data } = await axios.post("/api/seller/login", {
        email,
        password,
      });

      if (data.success) {
        setIsSeller(true);
        navigate("/seller");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    !isSeller && (
      <div className="seller-bg">
        <div className="seller-card">
          <div className="seller-left">
            <h2>Welcome Back 🌾</h2>
            <p>
              Login to manage your products, track orders, and grow your
              fertilizer business.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="seller-form">
            <h3>Seller Login</h3>

            <label>Email</label>
            <input
              type="email"
              placeholder="seller@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label>Password</label>
            <div className="password-box">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? "🙈" : "👁"}
              </span>
            </div>

            <button type="submit">Login as Seller</button>
          </form>
        </div>
      </div>
    )
  );
};

export default SellerLogin;
