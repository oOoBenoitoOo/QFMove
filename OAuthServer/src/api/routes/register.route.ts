import { Router } from "express";
import { registerView } from "../controllers/register-view.controller";
import { register } from "../controllers/register.controller";

const registerRouter = Router();

registerRouter.post("/", register);

registerRouter.get("/view", registerView);

export default registerRouter;
