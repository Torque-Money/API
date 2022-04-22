import { BigNumber } from "ethers";

import tokenData from "../data/Token";
import { loadContractTorqueVaultV1 } from "../utils/Ethers";
import { parseAddress, parseBigNumber } from "../utils/Parse";
import { getPrice } from "./Prices";

// Get the users TVL for the vault
export async function getUserVaultTVL(vault: string, wallet: string) {
    const contractVault = loadContractTorqueVaultV1(vault);

    let tvl = 0;

    const shares: BigNumber = await contractVault.balanceOf(wallet);
    if (shares.eq(0)) return tvl;

    const tokenAmount: BigNumber[] = await contractVault.estimateRedeem(shares);

    for (let i = 0; i < tokenAmount.length; i++) {
        const token = parseAddress(await contractVault.tokenByIndex(i));

        const decimals = tokenData[token].decimals;

        const amount = parseBigNumber(tokenAmount[i], decimals);

        tvl += (await getPrice(token)) * amount;
    }

    return tvl;
}

// Get the users balance for the vault
export async function getUserVaultBalance(vault: string, wallet: string) {
    const contractVault = loadContractTorqueVaultV1(vault);

    const shares: BigNumber = await contractVault.balanceOf(wallet);
    let emptyFlag = false;
    if (shares.eq(0)) emptyFlag = true;

    const tokenAmount: BigNumber[] = await contractVault.estimateRedeem(shares);

    const amounts: any = {};
    for (let i = 0; i < tokenAmount.length; i++) {
        const token = parseAddress(await contractVault.tokenByIndex(i));

        if (!emptyFlag) {
            const decimals = tokenData[token].decimals;

            amounts[token] = parseBigNumber(tokenAmount[i], decimals);
        } else amounts[token] = 0;
    }

    return amounts as { [key: string]: number };
}

// Get a quote for the allocation of tokens off of a single allocation for the vault
export async function getUserVaultQuote(vault: string, token: string, amount: number) {
    const contractVault = loadContractTorqueVaultV1(vault);

    const tokenCount = await contractVault.tokenCount();
    if (tokenCount < 2) throw new Error("Vault requires at least two tokens");

    // **** Now we need to calculate the percentage for this, and then we need to calculate the allocations for the other tokens and return them as JSON

    // **** To do this we need to find the percent which gets them there, and then do the same thing for the rest
}
