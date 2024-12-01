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
import { CountHaircutsController } from "./controllers/haircut/CountHaircutController";
import { DetailHaircutController } from "./controllers/haircut/DetailHaircutController";

import { NewScheduleController } from "./controllers/schedule/NewScheduleController";
import { ListScheduleController } from "./controllers/schedule/ListScheduleController";

import { isAuthenticated } from "./middlewares/isAuthenticated";
import { FinishScheduleController } from "./controllers/schedule/FinishSheduleController";

import { SubscribeController } from "./controllers/subscription/SubscribeController";

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
router.get(
  "/haircut/count",
  isAuthenticated,
  new CountHaircutsController().handle
);
router.get(
  "/haircut/detail",
  isAuthenticated,
  new DetailHaircutController().handle
);

router.post("/schedule", isAuthenticated, new NewScheduleController().handle);
router.get("/schedule", isAuthenticated, new ListScheduleController().handle);
router.delete(
  "/schedule",
  isAuthenticated,
  new FinishScheduleController().handle
);

router.post("/subscribe", isAuthenticated, new SubscribeController().handle);

export { router };
