import { getTokenData } from "../../data";
import { parseAddress, parseBigNumber, loadContractTorqueVaultV1, getTokenPrice } from "../../utils";

// Get the users TVL for the vault
export async function getUserVaultTVL(vault: string, wallet: string) {
    const contractVault = loadContractTorqueVaultV1(vault);

    let tvl = 0;

    const shares = await contractVault.balanceOf(wallet);
    if (shares.eq(0)) return tvl;

    const tokenAmount = await contractVault.estimateRedeem(shares);

    for (let i = 0; i < tokenAmount.length; i++) {
        const token = parseAddress(await contractVault.tokenByIndex(i));

        const { decimals } = getTokenData(token);

        const amount = parseBigNumber(tokenAmount[i], decimals);

        tvl += (await getTokenPrice(token)) * amount;
    }

    return tvl;
}

// Get the users balance for the vault
export async function getUserVaultBalance(vault: string, wallet: string) {
    const contractVault = loadContractTorqueVaultV1(vault);

    const shares = await contractVault.balanceOf(wallet);
    let emptyFlag = false;
    if (shares.eq(0)) emptyFlag = true;

    const tokenAmount = await contractVault.estimateRedeem(shares);

    const amounts: { [key: string]: number } = {};
    for (let i = 0; i < tokenAmount.length; i++) {
        const token = parseAddress(await contractVault.tokenByIndex(i));

        if (!emptyFlag) {
            const decimals = getTokenData(token).decimals;

            amounts[token] = parseBigNumber(tokenAmount[i], decimals);
        } else amounts[token] = 0;
    }

    return amounts;
}
