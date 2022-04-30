import express from "express";

import { HandleTokenPrice } from "../../controllers/Utils";
import { routeWrapper } from "../../utils";

const router = express.Router();

router.get("/price/:token", routeWrapper(HandleTokenPrice));

export default router;
