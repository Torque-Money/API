import { ethers } from "ethers";

import { ROUND_NUMBER } from "./constants";

export function parsePercent(raw: number) {
    return raw.toFixed(2);
}

export function parseNumber(raw: number) {
    if (raw > 1e9) return raw / 1e9 + "B";
    else if (raw > 1e6) return raw / 1e6 + "M";
    else if (raw > 1e3) return raw / 1e3 + "K";
    else return raw.toString();
}

export function parseBigNumber(raw: ethers.BigNumber, decimals: number) {
    return raw.mul(ROUND_NUMBER).div(ethers.BigNumber.from(10).pow(decimals)).toNumber() / ROUND_NUMBER;
}
