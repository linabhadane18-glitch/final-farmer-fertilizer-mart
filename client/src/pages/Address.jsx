import React, { useContext, useEffect } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import toast from "react-hot-toast";
import "./Address.css"; // ✅ Plain CSS file

const Address = () => {
  const [address, setAddress] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    phone: "",
  });

  const { axios, user, navigate } = useContext(AppContext);

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const submitHanlder = async (e) => {
    try {
      e.preventDefault();
      const { data } = await axios.post("/api/address/add", { address });
      console.log("data", data);
      if (data.success) {
        toast.success(data.message);
        navigate("/cart");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (!user) {
      navigate("/cart");
    }
  }, []);

  return (
    <div className="address-wrapper">
      {/* Left Side: Address Fields */}
      <div className="address-form-container">
        <h2 className="form-title">Address Details</h2>
        <form onSubmit={submitHanlder} className="address-form-grid">
          <div>
            <label className="form-label">First Name</label>
            <input
              type="text"
              name="firstName"
              value={address.firstName}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

          <div>
            <label className="form-label">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={address.lastName}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

          <div className="col-span-2">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              value={address.email}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

          <div className="col-span-2">
            <label className="form-label">Street</label>
            <input
              type="text"
              name="street"
              value={address.street}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

          <div>
            <label className="form-label">City</label>
            <input
              type="text"
              name="city"
              value={address.city}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

          <div>
            <label className="form-label">State</label>
            <input
              type="text"
              name="state"
              value={address.state}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

          <div>
            <label className="form-label">Pin Code</label>
            <input
              type="number"
              name="zipCode"
              value={address.zipCode}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

          <div>
            <label className="form-label">Country</label>
            <input
              type="text"
              name="country"
              value={address.country}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

          <div className="col-span-2">
            <label className="form-label">Phone</label>
            <input
              type="number"
              name="phone"
              value={address.phone}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

          <div className="col-span-2">
            <button type="submit" className="submit-button">
              Save Address
            </button>
          </div>
        </form>
      </div>

      {/* Right Side: Image */}
      <div className="address-image-container">
        <img
          src={assets.add_address_iamge}
          alt="Address Illustration"
          className="address-image"
        />
      </div>
    </div>
  );
};

export default Address;
