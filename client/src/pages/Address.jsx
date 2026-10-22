import { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import toast from "react-hot-toast";
import "./Address.css";

const Address = () => {
  const { axios, user, navigate } = useContext(AppContext);

  const [formData, setFormData] = useState({
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

  /* =========================
     Redirect If Not Logged In
  ========================== */
  useEffect(() => {
    if (!user) {
      navigate("/cart");
    }
  }, [user, navigate]);

  /* =========================
     Handle Input Change
  ========================== */
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* =========================
     Submit Address
  ========================== */
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await axios.post("/api/address/add", {
        address: formData,
      });

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

  return (
    <div className="address-wrapper">
      {/* ================= FORM SECTION ================= */}
      <div className="address-form-container">
        <h2 className="form-title">Address Details</h2>

        <form onSubmit={handleSubmit} className="address-form-grid">
          {/* First Name */}
          <div className="form-group">
            <label className="form-label">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

          {/* Last Name */}
          <div className="form-group">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

          {/* Email */}
          <div className="form-group col-span-2">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

          {/* Street */}
          <div className="form-group col-span-2">
            <label className="form-label">Street</label>
            <input
              type="text"
              name="street"
              value={formData.street}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

          {/* City */}
          <div className="form-group">
            <label className="form-label">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

          {/* State */}
          <div className="form-group">
            <label className="form-label">State</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

          {/* Zip Code */}
          <div className="form-group">
            <label className="form-label">Pin Code</label>
            <input
              type="number"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

          {/* Country */}
          <div className="form-group">
            <label className="form-label">Country</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

          {/* Phone */}
          <div className="form-group col-span-2">
            <label className="form-label">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="col-span-2">
            <button type="submit" className="submit-button">
              Save Address
            </button>
          </div>
        </form>
      </div>

      {/* ================= IMAGE SECTION ================= */}
      <div className="address-image-container">
        <img
          src={assets.add_address_iamge}
          alt="Delivery Address Illustration"
          className="address-image"
        />
      </div>
    </div>
  );
};

export default Address;