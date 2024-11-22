import { hash } from "bcryptjs";
import { Router, Request, Response } from "express";

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { UpdateUserController } from "./controllers/user/UpdateUserController";

import { CreateHaircutController } from "./controllers/haircut/CreateHaircutController";
import { ListHaircutController } from "./controllers/haircut/ListHaircutController";
import { UpdateHaircutController } from "./controllers/haircut/UpdateHaircutController";
import { CheckSubscriptionController } from "./controllers/haircut/CheckSubscriptionController";

import { isAuthenticated } from "./middlewares/isAuthenticated";

const router = Router();

router.post("/users", new CreateUserController().handle);
router.put("/users", isAuthenticated, new UpdateUserController().handle);
router.post("/session", new AuthUserController().handle);
router.get("/me", isAuthenticated, new DetailUserController().handle);

router.post("/haircuts", isAuthenticated, new CreateHaircutController().handle);
router.put("/haircuts", isAuthenticated, new UpdateHaircutController().handle);
router.get("/haircuts", isAuthenticated, new ListHaircutController().handle);
router.get(
  "/haircut/check",
  isAuthenticated,
  new CheckSubscriptionController().handle
);

export { router };
