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
const axios_1 = __importDefault(require("axios"));
const constants_1 = require("../utils/constants");
const strategies = {
    "0x6ad07e659563490d40377a98a7f0f62ed7d38c41": () => __awaiter(void 0, void 0, void 0, function* () {
        return yield routeBeefyAPY("boo-ftm-usdc");
    }),
};
function routeBeefyAPY(name) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = `${constants_1.BEEFY_API}/apy`;
        const { data } = yield axios_1.default.get(url);
        return data[name] * 100;
    });
}
function getStrategyAPY(strategy) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield strategies[strategy]();
    });
}
exports.default = getStrategyAPY;
