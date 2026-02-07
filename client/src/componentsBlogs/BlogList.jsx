import React, { useEffect, useState } from "react";
import "./BlogList.css";
import { blogAPI } from "../services/api";
import BlogCard from "./BlogCard.jsx";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await blogAPI.getAllBlogs();
        // API returns: { success, blogs, totalPages, ... }
        setBlogs(response.data?.blogs || []);
      } catch (err) {
        setError("Failed to load blogs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner" />
        <span>Loading blogs...</span>
      </div>
    );
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!blogs.length) {
    return <p>No blogs found. Be the first to add one!</p>;
  }

  return (
    <section className="blog-list">
      <h1 className="blog-list__title">Latest Blogs</h1>
      <div className="blog-list__grid">
        {blogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </section>
  );
};

export default BlogList;


