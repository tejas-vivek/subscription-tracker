import { Router } from "express";

const userRouter = Router(); // Create a new router instance

userRouter.get("/", (req, res) => {
  res.send({ title: "GET all users" });
}); // Define the user profile route

userRouter.get("/:id", (req, res) => {
    res.send({title: "GET user details"})
});

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