import { Router } from "express";
import { error401, error400, error403 } from "../controllers/errors.controller.js";

const router = Router();

router.get("/401", error401);
router.post("/400", error400);
router.get("/403", error403);

export default router;