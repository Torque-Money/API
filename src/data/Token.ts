import { parseAddress } from "../utils";

const TokenData = {
    "0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83": {
        ticker: "FTM",
        address: "0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83",
        name: "Fantom",
        decimals: 18,
    },
    "0x04068da6c83afcfa0e13ba15a6696662335d5b75": {
        ticker: "USDC",
        address: "0x04068da6c83afcfa0e13ba15a6696662335d5b75",
        name: "USD Coin",
        decimals: 6,
    },
} as { [key: string]: { ticker: string; address: string; name: string; decimals: number } };

export function getTokenData(token: string) {
    return TokenData[parseAddress(token)];
}

export function getAllTokens() {
    return Object.keys(TokenData);
}
