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
    "0x8d11ec38a3eb5e956b052f67da8bdc9bef8abf3e": {
        ticker: "DAI",
        address: "0x8d11ec38a3eb5e956b052f67da8bdc9bef8abf3e",
        name: "DAI",
        decimals: 18,
    },
    "0x321162cd933e2be498cd2267a90534a804051b11": {
        ticker: "BTC",
        address: "0x321162cd933e2be498cd2267a90534a804051b11",
        name: "Bitcoin",
        decimals: 8,
    },
    "0x74b23882a30290451a17c44f4f05243b6b58c76d": {
        ticker: "ETH",
        address: "0x74b23882a30290451a17c44f4f05243b6b58c76d",
        name: "Ethereum",
        decimals: 18,
    },
    "0x049d68029688eabf473097a2fc38ef61633a3c7a": {
        ticker: "USDT",
        address: "0x049d68029688eabf473097a2fc38ef61633a3c7a",
        name: "Tether",
        decimals: 6,
    },
    "0xb3654dc3d10ea7645f8319668e8f54d2574fbdc8": {
        ticker: "LINK",
        address: "0xb3654dc3d10ea7645f8319668e8f54d2574fbdc8",
        name: "Chainlink",
        decimals: 18,
    },
} as { [key: string]: { ticker: string; address: string; name: string; decimals: number } };

export function getTokenData(token: string) {
    return TokenData[token];
}
