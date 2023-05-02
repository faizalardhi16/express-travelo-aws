import { Router } from "express";
import { getUserData } from "../handler/user.handler.js";

export default function userRoutesGateway(app) {
  const router = Router();

  router.get("/", getUserData);

  app.use("/api/v1/users", router);
}
