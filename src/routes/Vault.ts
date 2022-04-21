import express from "express";
import { HandleVaultAPY, HandleVaultFee, HandleVaultTVL } from "../controllers/Vault";
import routeWrapper from "../utils/routeWrapper";

const router = express.Router();

router.get("/fee/:vault", routeWrapper(HandleVaultFee));
router.get("/tvl/:vault", routeWrapper(HandleVaultTVL));
router.get("/apy/:vault", routeWrapper(HandleVaultAPY));

export default router;
