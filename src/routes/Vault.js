"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Vault_1 = require("../controllers/Vault");
const routeWrapper_1 = __importDefault(require("../utils/routeWrapper"));
const router = express_1.default.Router();
router.get("/fee/:vault", (0, routeWrapper_1.default)(Vault_1.HandleVaultFee));
router.get("/tvl/:vault", (0, routeWrapper_1.default)(Vault_1.HandleVaultTVL));
router.get("/apy/:vault", (0, routeWrapper_1.default)(Vault_1.HandleVaultAPY));
exports.default = router;
