import express from "express";

import { HandleVaultAPY, HandleVaultFee, HandleVaultTVL } from "../../controllers/Lens";
import { routeWrapper } from "../../utils";

const router = express.Router();

router.get("/fee/:vault", routeWrapper(HandleVaultFee));
router.get("/tvl/:vault", routeWrapper(HandleVaultTVL));
router.get("/apy/:vault", routeWrapper(HandleVaultAPY));

export default router;

// **** Maybe it would make sense to bundle all of the lens routes in some upper routing package ?
