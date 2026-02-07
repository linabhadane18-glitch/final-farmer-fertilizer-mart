const Blog = require('../models/Blog');

// Get all published blogs
exports.getAllBlogs = async (req, res) => {
  try {
    const { category, search, page = 1, limit = 10 } = req.query;
    
    let query = { isPublished: true };
    
    // Filter by category
    if (category && category !== 'All') {
      query.category = category;
    }
    
    // Search functionality
    if (search) {
      query.$text = { $search: search };
    }
    
    const blogs = await Blog.find(query)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);
    
    const count = await Blog.countDocuments(query);
    
    res.json({
      success: true,
      blogs,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
      total: count
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching blogs',
      error: error.message
    });
  }
};

// Get single blog by ID
exports.getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    
    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found'
      });
    }
    
    // Increment views
    blog.views += 1;
    await blog.save();
    
    res.json({
      success: true,
      blog
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching blog',
      error: error.message
    });
  }
};

// Create new blog (Admin)
exports.createBlog = async (req, res) => {
  try {
    const { title, content, author, category, image, tags } = req.body;
    
    const blog = new Blog({
      title,
      content,
      author,
      category,
      image,
      tags
    });
    
    await blog.save();
    
    res.status(201).json({
      success: true,
      message: 'Blog created successfully',
      blog
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error creating blog',
      error: error.message
    });
  }
};

// Update blog (Admin)
exports.updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found'
      });
    }
    
    res.json({
      success: true,
      message: 'Blog updated successfully',
      blog
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error updating blog',
      error: error.message
    });
  }
};

// Delete blog (Admin)
exports.deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    
    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found'
      });
    }
    
    res.json({
      success: true,
      message: 'Blog deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting blog',
      error: error.message
    });
  }
};

// Get latest blogs
exports.getLatestBlogs = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 5;
    
    const blogs = await Blog.find({ isPublished: true })
      .sort({ createdAt: -1 })
      .limit(limit)
      .select('title author category createdAt image');
    
    res.json({
      success: true,
      blogs
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching latest blogs',
      error: error.message
    });
  }
};

// Get popular blogs
exports.getPopularBlogs = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 5;
    
    const blogs = await Blog.find({ isPublished: true })
      .sort({ views: -1 })
      .limit(limit)
      .select('title author category views createdAt image');
    
    res.json({
      success: true,
      blogs
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching popular blogs',
      error: error.message
    });
  }
};

// Create blog with image upload
exports.createBlogWithImage = async (req, res) => {
  try {
    const { title, content, author, category, tags } = req.body;
    
    // Get image URL from uploaded file
    let imageUrl = 'https://via.placeholder.com/800x400?text=Blog+Image';
    if (req.file) {
      // Create URL for uploaded image
      imageUrl = `${req.protocol}://${req.get('host')}/uploads/blogs/${req.file.filename}`;
    }
    
    // Parse tags if it's a string
    let parsedTags = tags;
    if (typeof tags === 'string') {
      parsedTags = tags.split(',').map(tag => tag.trim());
    }
    
    const blog = new Blog({
      title,
      content,
      author,
      category,
      image: imageUrl,
      tags: parsedTags
    });
    
    await blog.save();
    
    res.status(201).json({
      success: true,
      message: 'Blog created successfully with image',
      blog
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error creating blog',
      error: error.message
    });
  }
};

