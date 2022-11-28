import { Router } from "express";
import { approve } from "../controllers/approve.controller";

const approveRouter = Router();

approveRouter.post("/", approve);

export default approveRouter;
