"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadContractBeefyLPStrategy = exports.loadContractTorqueVaultV1 = exports.provider = void 0;
const ethers_1 = require("ethers");
const BeefyLPStrategy_json_1 = __importDefault(require("../../abi/BeefyLPStrategy.json"));
const TorqueVaultV1_json_1 = __importDefault(require("../../abi/TorqueVaultV1.json"));
const RPC_URL = "https://rpc.ftm.tools/";
exports.provider = new ethers_1.ethers.providers.JsonRpcProvider(RPC_URL);
function loadContractTorqueVaultV1(vault) {
    return new ethers_1.ethers.Contract(vault, TorqueVaultV1_json_1.default.abi, exports.provider);
}
exports.loadContractTorqueVaultV1 = loadContractTorqueVaultV1;
function loadContractBeefyLPStrategy(strategy) {
    return new ethers_1.ethers.Contract(strategy, BeefyLPStrategy_json_1.default.abi, exports.provider);
}
exports.loadContractBeefyLPStrategy = loadContractBeefyLPStrategy;
