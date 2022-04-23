import { getTokenData } from "../../data";
import { parseAddress, parseBigNumber, loadContractTorqueVaultV1, parseToBigNumber, ROUND_NUMBER } from "../../utils";
import { getTokenPrice } from ".";

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

    const tokenCount = (await contractVault.tokenCount()).toNumber();
    if (tokenCount < 2) throw new Error("Vault requires at least two tokens");

    const vaultBalance = await contractVault.approxBalance(token);
    const { decimals } = getTokenData(token);
    const parsedAmount = parseToBigNumber(amount, decimals);

    const ratio = parsedAmount.mul(ROUND_NUMBER).div(vaultBalance).toNumber() / ROUND_NUMBER;

    const amounts: any = {};

    for (let i = 0; i < tokenCount; i++) {
        const vaultToken = await contractVault.tokenByIndex(i);

        if (vaultToken != token) {
            // **** Now line the amounts up with the given ratio
            const vaultBalance = await contractVault.approxBalance(vaultToken);
            const allocatedAmountRaw = vaultBalance.mul(Math.floor(ratio * ROUND_NUMBER)).div(ROUND_NUMBER);

            const { decimals } = getTokenData(vaultToken);
            amounts[vaultToken] = parseBigNumber(allocatedAmountRaw, decimals);
        }
    }

    return amounts as { [key: string]: number };
}
