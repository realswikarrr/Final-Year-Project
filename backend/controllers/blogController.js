import asyncHandler from "express-async-handler";
import Blog from "../models/blogModel.js";

// @description     Fetch All Blogs
// @route           Get /api/blogs
// @access          Public
const getBlogs = asyncHandler(async (req, res) => {
  const blogs = await Blog.find({});
  res.json(blogs);
});

// @description     Fetch Single Blogs
// @route           Get /api/blog/:id
// @access          Public
const getBlogById = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  if (blog) {
    res.json(blog);
  } else {
    res.status(404).json({ message: "Blog not found." });
  }
});

// @description     Delete a Blog
// @route           DELETE /api/blog/:id
// @access          Private / Admin
const deleteBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  if (blog) {
    await blog.remove();
    res.json({ message: "Blog Removed" });
  } else {
    res.status(404);
    throw new Error("Blog Not Found");
  }
});

// @description     Create A Blog
// @route           POST /api/blogs
// @access          Private / Admin
const createBlog = asyncHandler(async (req, res) => {
  const blog = new Blog({
    user: req.user._id,
    author: "Default Author",
    title: "This is a default title",
    description: "This is a default description",
    content: "This is a default content",
    image: "/images/sample.jpg",
  });

  const createdBlog = await blog.save();
  res.status(201).json(createdBlog);
});

// @description     Update A Blog
// @route           PUT /api/blogs/:id
// @access          Private / Admin
const updateBlog = asyncHandler(async (req, res) => {
  const { author, title, description, content, image } = req.body;

  const blog = await Blog.findById(req.params.id);

  if (blog) {
    blog.author = author;
    blog.title = title;
    blog.description = description;
    blog.content = content;
    blog.image = image;

    const updatedBlog = await blog.save();
    res.json(updatedBlog);
  } else {
    res.status(404);
    throw new Error("Blog Not Found");
  }
});

export { getBlogs, getBlogById, deleteBlog, createBlog, updateBlog };
