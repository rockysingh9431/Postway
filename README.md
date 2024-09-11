# Social Media API

## Overview

This API provides functionality for managing posts, comments, likes, and user authentication. It supports operations for creating, updating, deleting, and retrieving posts and comments, as well as liking and bookmarking posts. It also includes user signup and signin features.

## Features

### Posts

- **Create Post**  
  `POST /posts`  
  Create a new post with an optional image upload. Requires caption and userId.

- **Get All Posts**  
  `GET /posts`  
  Retrieve all posts with optional filtering, sorting, and pagination.

- **Get Post By ID**  
  `GET /posts/:id`  
  Retrieve a specific post by its ID.

- **Update Post**  
  `PUT /posts/:id`  
  Update an existing post’s caption and image.

- **Delete Post**  
  `DELETE /posts/:id`  
  Delete a post by its ID.

- **Update Post Status**  
  `PUT /posts/:id/:status`  
  Update the status of a post (e.g., draft, archived).

- **Bookmark Post**  
  `POST /posts/:id/bookmark`  
  Toggle bookmark status for a post.

### Comments

- **Create Comment**  
  `POST /comments/:postId`  
  Add a comment to a specific post.

- **Get Comments By Post ID**  
  `GET /comments/:postId`  
  Retrieve all comments for a specific post.

- **Update Comment**  
  `PUT /comments/:commentId`  
  Update the content of a specific comment.

- **Delete Comment**  
  `DELETE /comments/:commentId`  
  Delete a comment by its ID.

### Likes

- **Toggle Like**  
  `POST /likes/:postId`  
  Toggle like status for a post.

- **Get Likes By Post ID**  
  `GET /likes/:postId`  
  Retrieve all likes for a specific post.

### Authentication

- **Signup**  
  `POST /signup`  
  Register a new user.

- **Signin**  
  `POST /signin`  
  Authenticate a user and generate a session token.

## Usage

1. **Start the Server**  
   Ensure all dependencies are installed and start the server using `npm start` or `node server.js`.

2. **API Testing**  
   Use tools like Postman or cURL to test the endpoints. Refer to the provided routes and methods to interact with the API.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

