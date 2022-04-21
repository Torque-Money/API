import { ROUND_NUMBER } from "../utils/constants";
import { loadContractVault } from "../utils/ethers";
import getAPY from "./apy";
import { getPrice } from "./prices";

// Get the TVL of a particular vault
export async function getVaultTVL(vault: string) {
    const contractVault = loadContractVault(vault);

    let tvl = 0;

    const tokenCount = await contractVault.tokenCount();
    for (let i = 0; i < tokenCount; i++) {
        const token = await contractVault.tokenByIndex(i);
        // **** I need a way of getting the decimals for this so that I can then go and parse the result
        tvl += await getPrice(token);
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
