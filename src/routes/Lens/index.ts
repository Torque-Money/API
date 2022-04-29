import express from "express";

import Vault from "./Vault";
import UserVault from "./UserVault";
import Utils from "./Utils";

const router = express.Router();

router.use("/vault", Vault);
router.use("/userVault", UserVault);
router.use("/utils", Utils);

export default router;
