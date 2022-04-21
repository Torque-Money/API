import express from "express";
import { HandleVaultAPY, HandleVaultFee, HandleVaultTVL } from "../controllers/Vault";

const router = express.Router();

router.get("/fee/:vault", HandleVaultFee);
router.get("/tvl/:vault", HandleVaultTVL);
router.get("/apy/:vault", HandleVaultAPY);

export default router;
