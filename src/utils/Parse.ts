import { BigNumber } from "ethers";
import { ROUND_NUMBER } from "./Constants";

// Format a number to given decimal places
export function formatNumber(raw: number) {
    return raw.toFixed(2);
}

// Parse a number into its shortened form
export function parseNumber(raw: number) {
    if (raw > 1e9) return formatNumber(raw / 1e9) + "B";
    else if (raw > 1e6) return formatNumber(raw / 1e6) + "M";
    else if (raw > 1e3) return formatNumber(raw / 1e3) + "K";
    else return formatNumber(raw);
}

// Parse a big number into a number
export function parseBigNumber(raw: BigNumber, decimals: number) {
    return raw.mul(ROUND_NUMBER).div(BigNumber.from(10).pow(decimals)).toNumber() / ROUND_NUMBER;
}

// Parse an address for standardization
export function parseAddress(address: string) {
    return address.toLowerCase();
}
