import express from "express";

import { HandleVaultAPY, HandleVaultFee, HandleVaultTokens, HandleVaultTVL } from "../../controllers/Lens";
import { routeWrapper } from "../../utils";

const router = express.Router();

router.get("/tokens/:vault", routeWrapper(HandleVaultTokens));
router.get("/fee/:vault", routeWrapper(HandleVaultFee));
router.get("/tvl/:vault", routeWrapper(HandleVaultTVL));
router.get("/apy/:vault", routeWrapper(HandleVaultAPY));

export default router;
