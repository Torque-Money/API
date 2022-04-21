import { ethers } from "ethers";

import { ROUND_NUMBER } from "./constants";

export function parsePercent(raw: string) {}

export function parseNumber(raw: number) {
    if (raw > 1e9) {
    } else if (raw > 1e6) {
    } else if (raw > 1e3) {
    } else {
    }
}

export function parseBigNumber(raw: ethers.BigNumber, decimals: number) {
    return raw.mul(ROUND_NUMBER).div(ethers.BigNumber.from(10).pow(decimals)).toNumber() / ROUND_NUMBER;
}
