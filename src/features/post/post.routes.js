import express from "express";
import { upload } from "../../middlewares/fileupload.middleware.js";
import {
  bookmarkPost,
  createPost,
  deletePost,
  getALLPost,
  getPostById,
  getPostUser,
  updatePost,
  updatePostStatus,
} from "./post.controller.js";

const postRouter = express.Router();

// Route to get all posts with optional filtering, sorting, and pagination
postRouter.get("/all", getALLPost);

// Route to get a specific post by its ID
postRouter.get("/:id", getPostById);

// Route to get all posts by the logged-in user
postRouter.get("/", getPostUser);

// Route to create a new post; image upload is handled by middleware
postRouter.post("/", upload.single("imageUrl"), createPost);

// Route to delete a specific post by its ID
postRouter.delete("/:id", deletePost);

// Route to update a specific post by its ID; image upload is handled by middleware
postRouter.put("/:id", upload.single("imageUrl"), updatePost);

// Route to bookmark or unbookmark a specific post
postRouter.post("/:id/bookmark", bookmarkPost);

// Route to update the status of a specific post (e.g., draft, archived)
postRouter.put("/:id/:status", updatePostStatus);

export default postRouter;
