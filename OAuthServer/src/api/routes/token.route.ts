import { Router } from "express";
import { refreshtoken } from "../controllers/refresh.controller";
import { token } from "../controllers/token.controller";

const tokenRouter = Router();
tokenRouter.post("/refresh", refreshtoken);
tokenRouter.post("/", token);

export default tokenRouter;
