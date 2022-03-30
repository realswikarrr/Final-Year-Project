import express from "express";
const router = express.Router();
import {
  deleteBlog,
  getBlogById,
  getBlogs,
  createBlog,
  updateBlog,
} from "../controllers/blogController.js";
import { admin, protect } from "../middleware/authMiddleware.js";

router.route("/").get(getBlogs).post(protect, admin, createBlog);
router
  .route("/:id")
  .get(getBlogById)
  .delete(protect, admin, deleteBlog)
  .put(protect, admin, updateBlog);

export default router;
