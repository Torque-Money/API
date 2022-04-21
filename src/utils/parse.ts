import { ethers } from "ethers";

import { ROUND_NUMBER } from "./constants";

export function parsePercent(raw: string) {}

export function parseNumber(raw: number) {}

export function parseBigNumber(raw: ethers.BigNumber, decimals: number) {
    return raw.mul(ROUND_NUMBER).div(ethers.BigNumber.from(10).pow(decimals)).toNumber() / ROUND_NUMBER;
}
