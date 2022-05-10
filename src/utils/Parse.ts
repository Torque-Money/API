import { BigNumber } from "ethers";

import { ROUND_NUMBER } from ".";

// Parse a big number into a number
export function parseBigNumber(raw: BigNumber, decimals: number) {
    return raw.mul(ROUND_NUMBER).div(BigNumber.from(10).pow(decimals)).toNumber() / ROUND_NUMBER;
}

// Parse an address for standardization
export function parseAddress(address: string) {
    return address.toLowerCase();
}
