import { Router } from "express";
import approveRouter from "./approve.route";
import authorizeRouter from "./authorize.route";
import tokenRouter from "./token.route";

const router = Router();

router.use("/authorize", authorizeRouter);
router.use("/approve", approveRouter);
router.use("/token", tokenRouter);

export default router;
