import { getStrategyAPY } from ".";
import { getTokenPrice } from "../../utils/Prices";
import { getTokenData } from "../../data";
import { loadContractSupportsFee, loadContractVault, parseAddress, parseBigNumber, ROUND_NUMBER } from "../../utils";

// Get the tokens that a particular vault accepts
export async function getVaultTokens(vault: string) {
    const contractVault = loadContractVault(vault);

    const tokenCount = (await contractVault.tokenCount()).toNumber();

    const out = [];
    for (let i = 0; i < tokenCount; i++) out.push(parseAddress(await contractVault.tokenByIndex(i)));

    return out;
}

// Get the TVL of a particular vault
export async function getVaultTVL(vault: string) {
    const contractVault = loadContractVault(vault);

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
    const contractVault = loadContractVault(vault);

    const strategy = parseAddress(await contractVault.getStrategy());

    return getStrategyAPY(strategy);
}

// Get the fee for a particular vault
export async function getVaultFeePercent(vault: string) {
    const contractVault = loadContractSupportsFee(vault);

    let [percent, denominator] = await contractVault.feePercent();

    const fee = percent.mul(ROUND_NUMBER).div(denominator);

    return fee.toNumber() / ROUND_NUMBER;
}
