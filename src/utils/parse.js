"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseAddress = exports.parseBigNumber = exports.parseNumber = exports.formatNumber = void 0;
const ethers_1 = require("ethers");
const constants_1 = require("./constants");
function formatNumber(raw) {
    return raw.toFixed(2);
}
exports.formatNumber = formatNumber;
function parseNumber(raw) {
    if (raw > 1e9)
        return raw / 1e9 + "B";
    else if (raw > 1e6)
        return raw / 1e6 + "M";
    else if (raw > 1e3)
        return raw / 1e3 + "K";
    else
        return raw.toString();
}
exports.parseNumber = parseNumber;
function parseBigNumber(raw, decimals) {
    return raw.mul(constants_1.ROUND_NUMBER).div(ethers_1.ethers.BigNumber.from(10).pow(decimals)).toNumber() / constants_1.ROUND_NUMBER;
}
exports.parseBigNumber = parseBigNumber;
function parseAddress(address) {
    return address.toLowerCase();
}
exports.parseAddress = parseAddress;
