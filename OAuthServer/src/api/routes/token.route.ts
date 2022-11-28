import { Router } from "express";
import { token } from "../controllers/token.controller";

const tokenRouter = Router();

tokenRouter.post("/", token);

export default tokenRouter;
