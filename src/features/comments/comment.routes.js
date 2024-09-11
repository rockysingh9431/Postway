import express from "express";
import {
  createComment,
  deleteComment,
  getCommentsByPostId,
  updateComment,
} from "./comment.controller.js";

const commentRouter = express.Router();

// Route to get all comments for a specific post by its ID
// GET /comments/:postId
commentRouter.get("/:postId", getCommentsByPostId);

// Route to create a new comment for a specific post
// POST /comments/:postId
commentRouter.post("/:postId", createComment);

// Route to delete a specific comment by its ID
// DELETE /comments/:commentId
commentRouter.delete("/:commentId", deleteComment);

// Route to update a specific comment by its ID
// PUT /comments/:commentId
commentRouter.put("/:commentId", updateComment);

export default commentRouter;
