import { Router } from "express";
import db from "../models/index.js";
const User = db.users;

export default function userRoutes(app) {
  const router = Router();

  router.get("/", async (req, res) => {
    const user = await User.findAll();

    res.send(user);
  });

  router.get("/post", async (req, res) => {
    try {
      const user = new User({
        email: "faizal@ardhi.com",
        password: "123123123",
      });

      await user.save(user);

      res.send("SUCCESS");
    } catch (error) {
      res.send(error.message);
    }
  });

  app.use("/api/v1", router);
}
