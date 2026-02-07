import React from "react";
import { useNavigate } from "react-router-dom";
import "./BlogCard.css";

const BlogCard = ({ blog }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/blogs/${blog._id}`);
  };

  return (
    <article className="blog-card" onClick={handleClick}>
      {blog.image && (
        <div className="blog-card__image-wrapper">
          <img
            src={blog.image}
            alt={blog.title}
            className="blog-card__image"
          />
        </div>
      )}

      <div className="blog-card__content">
        <h2 className="blog-card__title">{blog.title}</h2>

        <div className="blog-card__meta">
          {blog.author && (
            <span className="blog-card__author">{blog.author}</span>
          )}
          {blog.createdAt && (
            <span className="blog-card__date">
              {new Date(blog.createdAt).toLocaleDateString()}
            </span>
          )}
          {blog.category && (
            <span className="blog-card__category">{blog.category}</span>
          )}
        </div>

        {blog.content && (
          <p className="blog-card__excerpt">
            {blog.content.length > 140
              ? blog.content.slice(0, 140) + "..."
              : blog.content}
          </p>
        )}

        <button
          className="blog-card__read-more btn btn-primary"
          type="button"
        >
          Read more
        </button>
      </div>
    </article>
  );
};

export default BlogCard;


