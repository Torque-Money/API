import { BigNumber } from "ethers";

import { ROUND_NUMBER } from "../utils/Constants";
import getStrategyAPY from "./APY";
import { getPrice } from "./Prices";
import tokenData from "../data/Token";
import { parseAddress, parseBigNumber } from "../utils/Parse";
import { loadContractTorqueVaultV1 } from "../utils/Ethers";

// Get the TVL of a particular vault
export async function getVaultTVL(vault: string) {
    const contractVault = loadContractTorqueVaultV1(vault);

    let tvl = 0;

    const tokenCount: BigNumber = await contractVault.tokenCount();

    for (let i = 0; i < tokenCount.toNumber(); i++) {
        const token = parseAddress(await contractVault.tokenByIndex(i));

        const tokenAmount: BigNumber = await contractVault.approxBalance(token);
        const decimals = tokenData[token].decimals;

        const amount = parseBigNumber(tokenAmount, decimals);

        tvl += (await getPrice(token)) * amount;
    }

    return tvl;
}

// Get the APY of a particular vault
export async function getVaultAPY(vault: string) {
    const contractVault = loadContractTorqueVaultV1(vault);

    const strategy = parseAddress(await contractVault.getStrategy());

    return getStrategyAPY(strategy);
}

// Get the fee for a particular vault
export async function getVaultFee(vault: string) {
    const contractVault = loadContractTorqueVaultV1(vault);

    const feeAmount: BigNumber = await contractVault.feeAmount();
    let [percent, denominator]: [BigNumber, BigNumber] = await contractVault.feePercent();

    const fee = percent.mul(ROUND_NUMBER).div(denominator);

    // **** How do we deal with the decimals for the fee amount ???
    return [feeAmount.toNumber(), fee.toNumber() / ROUND_NUMBER] as [number, number];
}
