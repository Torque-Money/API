import { ROUND_NUMBER } from "../../utils/Constants";
import { getStrategyAPY } from "./APY";
import { getTokenPrice } from "./Prices";
import { getTokenData } from "../../data/Token";
import { parseAddress, parseBigNumber } from "../../utils";
import { loadContractTorqueVaultV1 } from "../../utils";

// Get the TVL of a particular vault
export async function getVaultTVL(vault: string) {
    const contractVault = loadContractTorqueVaultV1(vault);

    let tvl = 0;

    const tokenCount = (await contractVault.tokenCount()).toNumber();

    for (let i = 0; i < tokenCount; i++) {
        const token = parseAddress(await contractVault.tokenByIndex(i));

        const tokenAmount = await contractVault.approxBalance(token);
        const { decimals } = getTokenData(token);

        const amount = parseBigNumber(tokenAmount, decimals);

        tvl += (await getTokenPrice(token)) * amount;
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
export async function getVaultFeePercent(vault: string) {
    const contractVault = loadContractTorqueVaultV1(vault);

    let [percent, denominator] = await contractVault.feePercent();

    const fee = percent.mul(ROUND_NUMBER).div(denominator);

    return fee.toNumber() / ROUND_NUMBER;
}
