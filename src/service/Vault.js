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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVaultFee = exports.getVaultAPY = exports.getVaultTVL = void 0;
const constants_1 = require("../utils/constants");
const apy_1 = __importDefault(require("./apy"));
const prices_1 = require("./prices");
const token_1 = __importDefault(require("../../data/token"));
const parse_1 = require("../utils/parse");
const ethers_1 = require("../utils/ethers");
// Get the TVL of a particular vault
function getVaultTVL(vault) {
    return __awaiter(this, void 0, void 0, function* () {
        const contractVault = (0, ethers_1.loadContractTorqueVaultV1)(vault);
        let tvl = 0;
        const tokenCount = yield contractVault.tokenCount();
        for (let i = 0; i < tokenCount; i++) {
            const token = (0, parse_1.parseAddress)(yield contractVault.tokenByIndex(i));
            const tokenAmount = yield contractVault.approxBalance(token);
            const decimals = token_1.default[token].decimals;
            const amount = (0, parse_1.parseBigNumber)(tokenAmount, decimals);
            tvl += (yield (0, prices_1.getPrice)(token)) * amount;
        }
        return tvl;
    });
}
exports.getVaultTVL = getVaultTVL;
// Get the APY of a particular vault
function getVaultAPY(vault) {
    return __awaiter(this, void 0, void 0, function* () {
        const contractVault = (0, ethers_1.loadContractTorqueVaultV1)(vault);
        const strategy = (0, parse_1.parseAddress)(yield contractVault.getStrategy());
        return (0, apy_1.default)(strategy);
    });
}
exports.getVaultAPY = getVaultAPY;
// Get the fee for a particular vault
function getVaultFee(vault) {
    return __awaiter(this, void 0, void 0, function* () {
        const contractVault = (0, ethers_1.loadContractTorqueVaultV1)(vault);
        let [percent, denominator] = yield contractVault.feePercent();
        const fee = percent.mul(constants_1.ROUND_NUMBER).div(denominator);
        return fee.toNumber() / constants_1.ROUND_NUMBER;
    });
}
exports.getVaultFee = getVaultFee;
