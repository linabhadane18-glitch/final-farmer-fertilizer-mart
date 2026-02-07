import { useState } from "react";
import axios from "axios";
import "./SellerAddBlogs.css";

const SellerAddBlog = () => {
  const [form, setForm] = useState({
    title: "",
    content: "",
    image: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault();

    await axios.post(
      "http://localhost:5000/api/blogs/add",
      form,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("sellerToken")}`,
        },
      }
    );

    alert("Blog added successfully");
    setForm({ title: "", content: "", image: "" });
  };

  return (
    <div className="blog-form-container">
      <h2>Add New Blog</h2>

      <form onSubmit={submitHandler} className="blog-form">
        <input
          type="text"
          placeholder="Blog Title"
          value={form.title}
          onChange={(e) =>
            setForm({ ...form, title: e.target.value })
          }
          required
        />

        <textarea
          placeholder="Blog Content"
          value={form.content}
          onChange={(e) =>
            setForm({ ...form, content: e.target.value })
          }
          required
        />

        <input
          type="text"
          placeholder="Image URL (optional)"
          value={form.image}
          onChange={(e) =>
            setForm({ ...form, image: e.target.value })
          }
        />

        <button type="submit">Publish Blog</button>
      </form>
    </div>
  );
};

export default SellerAddBlog;