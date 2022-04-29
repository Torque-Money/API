import express from "express";

import { HandleUserVaultQuote } from "../../controllers/Lens";
import { routeWrapper } from "../../utils";

const router = express.Router();

router.get("/quote/:vault", routeWrapper(HandleUserVaultQuote));

export default router;
