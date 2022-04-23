import { BigNumber } from "ethers";

import { getTokenData } from "../../data";
import { loadContractTorqueVaultV1 } from "../../utils";
import { parseAddress, parseBigNumber } from "../../utils";
import { getTokenPrice } from ".";

// Get the users TVL for the vault
export async function getUserVaultTVL(vault: string, wallet: string) {
    const contractVault = loadContractTorqueVaultV1(vault);

    let tvl = 0;

    const shares: BigNumber = await contractVault.balanceOf(wallet);
    if (shares.eq(0)) return tvl;

    const tokenAmount: BigNumber[] = await contractVault.estimateRedeem(shares);

    for (let i = 0; i < tokenAmount.length; i++) {
        const token = parseAddress(await contractVault.tokenByIndex(i));

        const decimals = getTokenData(token).decimals;

        const amount = parseBigNumber(tokenAmount[i], decimals);

        tvl += (await getTokenPrice(token)) * amount;
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
            const decimals = getTokenData(token).decimals;

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

    // const vaultBalance =

    const amounts: any = {};

    // **** First of all I need to get the balances and iterate over until I find the ratio (no I dont, just get the balance here and divide by the decimals)

    // **** The loop here needs to consider it like it is a estimate deposit

    // **** Lets just get the approx balance of all the other tokens, and then use that ratio combined with the current amount to figure out the factor we need to multipy the current by

    return amounts as { [key: string]: number };
}
