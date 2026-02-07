import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./BlogDetail.css";
import { blogAPI } from "../services/api";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await blogAPI.getBlogById(id);
        // API returns: { success, blog }
        setBlog(response.data?.blog);
      } catch (err) {
        setError("Failed to load blog. It may have been removed.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner" />
        <span>Loading blog...</span>
      </div>
    );
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!blog) {
    return <p>Blog not found.</p>;
  }

  return (
    <article className="blog-detail">
      {blog.image && (
        <div className="blog-detail__image-wrapper">
          <img
            src={blog.image}
            alt={blog.title}
            className="blog-detail__image"
          />
        </div>
      )}

      <div className="blog-detail__content">
        <h1 className="blog-detail__title">{blog.title}</h1>

        <div className="blog-detail__meta">
          {blog.author && (
            <span className="blog-detail__author">{blog.author}</span>
          )}
          {blog.createdAt && (
            <span className="blog-detail__date">
              {new Date(blog.createdAt).toLocaleDateString()}
            </span>
          )}
          {blog.category && (
            <span className="blog-detail__category">{blog.category}</span>
          )}
        </div>

        {blog.content && (
          <div className="blog-detail__body">
            {blog.content.split("\n").map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

export default BlogDetail;


