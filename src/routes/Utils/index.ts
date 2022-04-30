import express from "express";

import Utils from "./_index";

const router = express.Router();

router.use("/", Utils);

export default router;
