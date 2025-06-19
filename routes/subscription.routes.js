import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js";
import {createSubscription, getUserSubscriptions} from "../controller/subscription.controller.js";

const subscriptionRouter = Router(); // Create a new router instance

subscriptionRouter.get("/", (req, res) => {
  res.send({ title: "GET all subscriptions" });
});

subscriptionRouter.get("/:id", (req, res) => {
  res.send({ title: "GET user subscription details" });
});

subscriptionRouter.post("/", authorize, createSubscription);


subscriptionRouter.put("/:id", (req, res) => {
  res.send({ title: "UPDATE subscription details" });
});

subscriptionRouter.delete("/:id", (req, res) => {
  res.send({ title: "DELETE a subscription" });
});

subscriptionRouter.get("/user/:id", authorize, getUserSubscriptions);

subscriptionRouter.put("/:id/cancel", (req, res) => {
    res.send({title: "CANCEL a subscription"})
})

subscriptionRouter.get("/upcoming-renewals", (req, res) => {
    res.send({title: 'GET upcoming renewals for all subscriptions'})
})

export default subscriptionRouter;
