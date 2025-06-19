import { Router } from "express";
import { getUser, getUsers } from "../controller/user.controller.js";
import authorize from "../middlewares/auth.middleware.js";

const userRouter = Router(); // Create a new router instance

userRouter.get("/", getUsers); // Define the user profile route

userRouter.get('/:id', authorize, getUser);

userRouter.post("/", (req, res) => {
    res.send({title: 'CREATE new user'})
});

userRouter.put("/:id", (req, res) => {
    res.send({title: 'UPDATE user details'})
});

userRouter.delete("/:id", (req, res) => {
    res.send({title: 'DELETE a user'});
});

export default userRouter; // Export the user router instance for use in the main app