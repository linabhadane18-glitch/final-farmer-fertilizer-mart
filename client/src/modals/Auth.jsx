import { useState } from "react";
import { useAppContext } from "../context/AppContext";
import { toast } from "react-hot-toast";
import "./Auth.css";

const Auth = () => {
  const [state, setState] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { setShowUserLogin, setUser, axios, navigate } = useAppContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`/api/user/${state}`, {
        name,
        email,
        password,
      });

      if (data.success) {
        toast.success(data.message);
        setUser(data.user);
        setShowUserLogin(false);
        navigate("/");
      } else {
        toast.error(data.message);
      }
    } catch {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="auth-modal" onClick={() => setShowUserLogin(false)}>
      <form
        className="auth-form"
        onSubmit={handleSubmit}
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER STRIP */}
        <div className="auth-header">
          🌱 Fertilizer Mart
        </div>

        <h2 className="auth-title">
          {state === "login" ? "Farmer Login" : "Create Farmer Account"}
        </h2>

        {state === "register" && (
          <div className="auth-field">
            <label>Name</label>
            <input
              className="auth-input"
              type="text"
              placeholder="Farmer name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        )}

        <div className="auth-field">
          <label>Email</label>
          <input
            className="auth-input"
            type="email"
            placeholder="farmer@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="auth-field">
          <label>Password</label>
          <div className="password-wrapper">
            <input
              className="auth-input"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>
        </div>

        <button className="auth-button">
          {state === "login" ? "Enter Farm" : "Start Farming"}
        </button>

        <p className="auth-toggle">
          {state === "login" ? (
            <>
              New farmer?{" "}
              <span onClick={() => setState("register")}>
                Register
              </span>
            </>
          ) : (
            <>
              Already registered?{" "}
              <span onClick={() => setState("login")}>
                Login
              </span>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default Auth;
