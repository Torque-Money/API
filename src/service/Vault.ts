import { ROUND_NUMBER } from "../utils/constants";
import { loadContractVault } from "../utils/ethers";
import getAPY from "./apy";
import { getPrice } from "./prices";
import tokenData from "../../data/token";
import { parseBigNumber } from "../utils/parse";

// Get the TVL of a particular vault
export async function getVaultTVL(vault: string) {
    const contractVault = loadContractVault(vault);

    let tvl = 0;

    const tokenCount = await contractVault.tokenCount();
    for (let i = 0; i < tokenCount; i++) {
        const token = await contractVault.tokenByIndex(i);

        const tokenAmount = await contractVault.approxBalance(token);
        const decimals = tokenData[token].decimals;

        const amount = parseBigNumber(tokenAmount, decimals);

        tvl += (await getPrice(token)) * amount;
    }

    return tvl;
}

// Get the APY of a particular vault
export async function getVaultAPY(vault: string) {
    const contractVault = loadContractVault(vault);

    const strategy = await contractVault.getStrategy();

    return getAPY(strategy);
}

// Get the fee for a particular vault
export async function getVaultFee(vault: string) {
    const contractVault = loadContractVault(vault);

    let [percent, denominator] = await contractVault.feePercent();

    const fee = percent.mul(ROUND_NUMBER).div(denominator);

    return fee.toNumber() / ROUND_NUMBER;
}
