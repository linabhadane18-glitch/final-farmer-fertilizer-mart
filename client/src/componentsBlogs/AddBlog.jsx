import React, { useState } from "react";
import "./AddBlog.css";
import { blogAPI } from "../services/api";
import { useNavigate } from "react-router-dom";

const AddBlog = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "",
    content: "",
  });

  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file || null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!formData.title || !formData.content || !formData.author) {
      setError("Title, author and content are required.");
      return;
    }

    try {
      setLoading(true);

      // If you want to use the image upload API
      const payload = new FormData();
      payload.append("title", formData.title);
      payload.append("author", formData.author);
      payload.append("category", formData.category);
      payload.append("content", formData.content);

      if (imageFile) {
        payload.append("image", imageFile);
      }

      await blogAPI.createBlogWithImage(payload);

      setSuccess("Blog created successfully!");
      setFormData({
        title: "",
        author: "",
        category: "",
        content: "",
      });
      setImageFile(null);

      // Optional: redirect to home after a short delay
      setTimeout(() => navigate("/"), 800);
    } catch (err) {
      // Try to show backend validation error if available
      const backendMessage =
        err?.response?.data?.message || err?.response?.data?.error;
      setError(backendMessage || "Failed to create blog. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="add-blog">
      <h1 className="add-blog__title">Add New Blog</h1>

      {error && <div className="error">{error}</div>}
      {success && <div className="add-blog__success">{success}</div>}

      <form className="add-blog__form" onSubmit={handleSubmit}>
        <div className="add-blog__field">
          <label htmlFor="title">Title *</label>
          <input
            id="title"
            name="title"
            type="text"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter blog title"
          />
        </div>

        <div className="add-blog__field">
          <label htmlFor="author">Author</label>
          <input
            id="author"
            name="author"
            type="text"
            value={formData.author}
            onChange={handleChange}
            placeholder="Author name"
          />
        </div>

        <div className="add-blog__field">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="">Select category</option>
            <option value="Organic Fertilizers">Organic Fertilizers</option>
            <option value="Chemical Fertilizers">Chemical Fertilizers</option>
            <option value="Soil Health">Soil Health</option>
            <option value="Crop Tips">Crop Tips</option>
            <option value="General">General</option>
          </select>
        </div>

        <div className="add-blog__field">
          <label htmlFor="content">Content *</label>
          <textarea
            id="content"
            name="content"
            rows="8"
            value={formData.content}
            onChange={handleChange}
            placeholder="Write your blog content here..."
          />
        </div>

        <div className="add-blog__field">
          <label htmlFor="image">Cover Image</label>
          <input
            id="image"
            name="image"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>

        <button
          className="btn btn-primary add-blog__submit"
          type="submit"
          disabled={loading}
        >
          {loading ? "Saving..." : "Create Blog"}
        </button>
      </form>
    </section>
  );
};

export default AddBlog;


