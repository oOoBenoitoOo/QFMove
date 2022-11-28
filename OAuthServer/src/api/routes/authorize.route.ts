import { Router } from "express";
import { authorize } from "../controllers/authorize.controller";

const authorizeRouter = Router();

authorizeRouter.get("/", authorize);

export default authorizeRouter;
