import { Router, Request, Response } from "express";

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { UpdateUserController } from "./controllers/user/UpdateUserController";

import { isAuthenticated } from "./middlewares/isAuthenticated";

const router = Router();

router.post("/users", new CreateUserController().handle);
router.put("/users", isAuthenticated, new UpdateUserController().handle);
router.post("/session", new AuthUserController().handle);
router.get("/me", isAuthenticated, new DetailUserController().handle);

export { router };
