import express from "express";
import upload from "../config/multer1.js";
import {
  getAllBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
  getLatestBlogs,
  getPopularBlogs,
  createBlogWithImage,
} from "../controller/blog.Controller.js";

const router = express.Router();

// Public routes
router.get("/", getAllBlogs);
router.get("/latest", getLatestBlogs);
router.get("/popular", getPopularBlogs);
router.get("/blog/:id", getBlogById);

// Admin routes (Add authentication / auth middleware later)
router.post("/", createBlog);
router.post("/with-image", upload.single("image"), createBlogWithImage);
router.put("/:id", updateBlog);
router.put("/:id/with-image", upload.single("image"), updateBlog);
router.delete("/:id", deleteBlog);

export default router;

