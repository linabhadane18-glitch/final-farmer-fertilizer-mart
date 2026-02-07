import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';


const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Blog APIs
export const blogAPI = {
  // Get all blogs with filters
  getAllBlogs: (params = {}) => {
    return api.get('/blogs', { params });
  },

  // Get single blog by ID
  getBlogById: (id) => {
    return api.get(`/blogs/${id}`);
  },

  // Get latest blogs
  getLatestBlogs: (limit = 5) => {
    return api.get('/blogs/latest', { params: { limit } });
  },

  // Get popular blogs
  getPopularBlogs: (limit = 5) => {
    return api.get('/blogs/popular', { params: { limit } });
  },

  // Create new blog (Admin)
  createBlog: (blogData) => {
    return api.post('/blogs', blogData);
  },

  // Create blog with image upload (Admin)
  createBlogWithImage: (formData) => {
    return api.post('/blogs/with-image', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },

  // Update blog (Admin)
  updateBlog: (id, blogData) => {
    return api.put(`/blogs/${id}`, blogData);
  },

  // Delete blog (Admin)
  deleteBlog: (id) => {
    return api.delete(`/blogs/${id}`);
  },
};

export default api;

