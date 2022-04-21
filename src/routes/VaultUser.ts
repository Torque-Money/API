import express from "express";

const router = express.Router();

router.get("/tvl/:vault");
router.get("/quote");
router.get("/maxTokens");

export default router;
