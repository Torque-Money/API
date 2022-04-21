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
exports.getPrice = void 0;
const axios_1 = __importDefault(require("axios"));
const constants_1 = require("../utils/constants");
const tokenData = {
    "0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83": () => __awaiter(void 0, void 0, void 0, function* () {
        return yield routeBeefyPrice("FTM");
    }),
    "0x04068da6c83afcfa0e13ba15a6696662335d5b75": () => __awaiter(void 0, void 0, void 0, function* () {
        return yield routeBeefyPrice("USDC");
    }),
};
function routeBeefyPrice(name) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = `${constants_1.BEEFY_API}/prices`;
        const { data } = yield axios_1.default.get(url);
        return data[name];
    });
}
function getPrice(token) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield tokenData[token]();
    });
}
exports.getPrice = getPrice;
