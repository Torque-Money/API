import express from "express";

import Vault from "./Vault";
import UserVault from "./UserVault";

const router = express.Router();

router.use("/vault", Vault);
router.use("/userVault", UserVault);

export default router;
