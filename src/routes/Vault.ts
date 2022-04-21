import express from "express";

const router = express.Router();

router.get("/fee/:vault");
router.get("/tvl/:vault");
router.get("/apy/:vault");

export default router;
