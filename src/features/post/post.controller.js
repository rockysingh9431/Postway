import PostModel from "./post.model.js";
import { ApplicationError } from "../../errorHandler/applicationError.js";

// Create a new post
export const createPost = (req, res) => {
  try {
    // Extract caption from request body and image URL from the uploaded file
    const { caption } = req.body;
    const imageUrl = req.file?.filename; // Optional chaining if file is not always present

    // Create a new post using the PostModel class
    const newPost = PostModel.createPost({
      userId: req.userID, // Get the user ID from the request
      caption,
      imageURL: imageUrl,
    });

    // Return the newly created post with a 201 status code
    return res.status(201).json(newPost);
  } catch (error) {
    // Handle and throw any application errors
    throw new ApplicationError(error.message, error.status);
  }
};

// Get all posts with optional filtering, sorting, and pagination
export const getALLPost = (req, res) => {
  try {
    // Extract pagination and filtering parameters from the request
    const { page = 1, limit = 10 } = req.query; // Default to page 1 and limit 10 if not provided
    const { caption, status, sort } = req.body;

    // Get filtered, sorted, and paginated posts
    const posts = PostModel.getFilteredPosts(
      caption,
      status,
      sort,
      parseInt(page),
      parseInt(limit)
    );

    // Return posts if found, otherwise return a 404 status
    if (posts.length > 0) {
      return res.status(200).json(posts);
    } else {
      return res.status(404).json({ message: "No posts found" });
    }
  } catch (error) {
    // Handle and throw any application errors
    throw new ApplicationError(error.message, error.status);
  }
};

// Get a specific post by its ID
export const getPostById = (req, res) => {
  try {
    // Extract post ID from request parameters
    const postId = req.params.id;

    // Retrieve the post by ID using the PostModel class
    const resp = PostModel.getPostById(postId);

    // Return post data if found, otherwise return a 404 status
    if (resp.success) {
      return res.status(200).json(resp.post);
    } else {
      return res.status(404).json({ message: resp.message });
    }
  } catch (error) {
    // Handle and throw any application errors
    throw new ApplicationError(error.message, error.status);
  }
};

// Get all posts by a specific user
export const getPostUser = (req, res) => {
  try {
    // Extract user ID from the request (assumed to be set by authentication middleware)
    const userId = req.userID;

    // Retrieve posts for the specific user using the PostModel class
    const resp = PostModel.getPostsByUserId(userId);

    // Return user posts if found, otherwise return a 404 status
    if (resp.success) {
      return res.status(200).json(resp.posts);
    } else {
      return res.status(404).json({ message: resp.message });
    }
  } catch (error) {
    // Handle and throw any application errors
    throw new ApplicationError(error.message, error.status);
  }
};

// Delete a specific post by its ID
export const deletePost = (req, res) => {
  try {
    // Extract post ID from request parameters
    const postId = req.params.id;

    // Attempt to delete the post using the PostModel class
    const resp = PostModel.deletePost(postId);

    // Return success message if deleted, otherwise return a 404 status
    if (resp.success) {
      return res.status(200).json({ message: resp.message });
    } else {
      return res.status(404).json({ message: resp.message });
    }
  } catch (error) {
    // Handle and throw any application errors
    throw new ApplicationError(error.message, error.status);
  }
};

// Update a specific post by its ID
export const updatePost = (req, res) => {
  try {
    // Extract post ID from request parameters and updated data from request body
    const postId = req.params.id;
    const { caption } = req.body;
    const imageUrl = req.file?.filename; // Optional chaining if file is not always present

    // Update the post using the PostModel class
    const resp = PostModel.updatePost(postId, { caption, imageURL: imageUrl });

    // Return updated post data if successful, otherwise return a 404 status
    if (resp.success) {
      return res.status(200).json(resp.post);
    } else {
      return res.status(404).json({ message: resp.message });
    }
  } catch (error) {
    // Handle and throw any application errors
    throw new ApplicationError(error.message, error.status);
  }
};

// Update the status of a specific post (e.g., draft, archived)
export const updatePostStatus = (req, res) => {
  try {
    // Extract post ID and status from request parameters
    const postId = req.params.id;
    const status = req.body.status;

    // Update the post status using the PostModel class
    const resp = PostModel.updatePostStatus(postId, status);

    // Return success message if updated, otherwise return a 404 status
    if (resp.success) {
      return res.status(200).json({ message: resp.message });
    } else {
      return res.status(404).json({ message: resp.message });
    }
  } catch (error) {
    // Handle and throw any application errors
    throw new ApplicationError(error.message, error.status);
  }
};

// Bookmark a specific post
export const bookmarkPost = (req, res) => {
  try {
    // Extract post ID from request parameters and user ID from the request
    const postId = req.params.id;
    const userId = req.userID; // Assuming userID is provided in the request

    // Toggle the bookmark status for the post using the PostModel class
    const resp = PostModel.toggleBookmark(postId, userId);

    // Return success message if toggled, otherwise return a 404 status
    if (resp.success) {
      return res.status(200).json({ message: resp.message });
    } else {
      return res.status(404).json({ message: resp.message });
    }
  } catch (error) {
    // Handle and throw any application errors
    throw new ApplicationError(error.message, error.status);
  }
};
