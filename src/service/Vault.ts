import { ROUND_NUMBER } from "../utils/constants";
import getStrategyAPY from "./apy";
import { getPrice } from "./prices";
import tokenData from "../../data/token";
import { parseBigNumber } from "../utils/parse";
import { loadContractTorqueVaultV1 } from "../utils/ethers";

// Get the TVL of a particular vault
export async function getVaultTVL(vault: string) {
    const contractVault = loadContractTorqueVaultV1(vault);

    let tvl = 0;

    const tokenCount = await contractVault.tokenCount();

    for (let i = 0; i < tokenCount; i++) {
        const token = (await contractVault.tokenByIndex(i)).toLowerCase();

        const tokenAmount = await contractVault.approxBalance(token);
        const decimals = tokenData[token].decimals;

        const amount = parseBigNumber(tokenAmount, decimals);

        tvl += (await getPrice(token)) * amount;
    }

    return tvl;
}

// Get the APY of a particular vault
export async function getVaultAPY(vault: string) {
    const contractVault = loadContractTorqueVaultV1(vault);

    const strategy = await contractVault.getStrategy();

    return getStrategyAPY(strategy);
}

// Get the fee for a particular vault
export async function getVaultFee(vault: string) {
    const contractVault = loadContractTorqueVaultV1(vault);

    let [percent, denominator] = await contractVault.feePercent();

    const fee = percent.mul(ROUND_NUMBER).div(denominator);

    return fee.toNumber() / ROUND_NUMBER;
}
