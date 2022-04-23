import express from "express";

import { HandleUserVaultBalance, HandleUserVaultQuote, HandleUserVaultTVL } from "../../controllers/Lens";
import { routeWrapper } from "../../utils";

const router = express.Router();

router.get("/tvl/:vault", routeWrapper(HandleUserVaultTVL));
router.get("/balance/:vault", routeWrapper(HandleUserVaultBalance));
router.get("/quote/:vault", routeWrapper(HandleUserVaultQuote));

export default router;
