"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandleVaultFee = exports.HandleVaultAPY = exports.HandleVaultTVL = void 0;
const Vault_1 = require("../service/Vault");
const parse_1 = require("../utils/parse");
function HandleVaultTVL(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const vault = (0, parse_1.parseAddress)(req.params.vault);
        const tvl = yield (0, Vault_1.getVaultTVL)(vault);
        res.send((0, parse_1.formatNumber)(tvl));
    });
}
exports.HandleVaultTVL = HandleVaultTVL;
function HandleVaultAPY(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const vault = (0, parse_1.parseAddress)(req.params.vault);
        const apy = yield (0, Vault_1.getVaultAPY)(vault);
        res.send((0, parse_1.formatNumber)(apy));
    });
}
exports.HandleVaultAPY = HandleVaultAPY;
function HandleVaultFee(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const vault = (0, parse_1.parseAddress)(req.params.vault);
        const fee = yield (0, Vault_1.getVaultFee)(vault);
        res.send((0, parse_1.formatNumber)(fee));
    });
}
exports.HandleVaultFee = HandleVaultFee;
