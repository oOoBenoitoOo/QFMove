import { Router } from "express";
import { reinitPasswordView } from "../controllers/reinit-password-view.controller";
import { reinitPassword } from "../controllers/reinit-password.controller";
import { reinitView } from "../controllers/reinit-view.controller";
import { reinit } from "../controllers/reinit.controller";

const reinitRouter = Router();

reinitRouter.get("/view", reinitView);
reinitRouter.get("/:id", reinitPasswordView);
reinitRouter.post("/password", reinitPassword);
reinitRouter.post("/", reinit);

export default reinitRouter;
