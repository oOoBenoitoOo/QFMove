import { Router } from "express";
import approveRouter from "./approve.route";
import authorizeRouter from "./authorize.route";
import registerRouter from "./register.route";
import reinitRouter from "./reinit.route";
import tokenRouter from "./token.route";

const router = Router();

router.use("/authorize", authorizeRouter);
router.use("/approve", approveRouter);
router.use("/token", tokenRouter);
router.use("/register", registerRouter);
router.use("/reinit", reinitRouter);

export default router;
