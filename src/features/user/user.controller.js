import UserModel from "./user.model.js";
import jwt from "jsonwebtoken";
export const signUp = (req, res) => {
  const { name, email, password } = req.body;
  const user = UserModel.signUp(name, email, password);
  res.status(201).send(user);
};

export const signIn = (req, res) => {
  const result = UserModel.signIn(req.body.email, req.body.password);
  if (!result) {
    return res.status(400).send("Incorrect Credentials");
  } else {
    // 1. Create token.
    const token = jwt.sign(
      {
        userID: result.id,
        email: result.email,
      },
      "postwayProject1",
      {
        expiresIn: "1h",
      }
    );
    res.cookie("authToken", token, {
      httpOnly: true, // Helps prevent XSS attacks
      maxAge: 3600000, // Cookie expiry in milliseconds (1 hour here)
    });
    // 2. Send token.
    return res.status(200).send(token);
  }
};
