import express from "express";

import routeWrapper from "../utils/RouteWrapper";

const router = express.Router();

router.get("/tvl/:vault", routeWrapper(HandleVaultFee));
router.get("/balance/:vault", routeWrapper(HandleVaultTVL));
router.get("/quote/:vault", routeWrapper(HandleVaultAPY));

export default router;
