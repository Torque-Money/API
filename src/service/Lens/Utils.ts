import { getTokenData } from "../../data";
import { loadContractTorqueVaultV1, parseBigNumber, parseToBigNumber, ROUND_NUMBER } from "../../utils";

// Get a quote for the allocation of tokens off of a single allocation for the vault
export async function getUserVaultQuote(vault: string, token: string, amount: number) {
    const contractVault = loadContractTorqueVaultV1(vault);

    const tokenCount = (await contractVault.tokenCount()).toNumber();
    if (tokenCount < 2) throw new Error("Vault requires at least two tokens");

    const vaultBalance = await contractVault.approxBalance(token);
    if (vaultBalance.eq(0)) return null;

    const { decimals } = getTokenData(token);
    const parsedAmount = parseToBigNumber(amount, decimals);

    const ratio = parsedAmount.mul(ROUND_NUMBER).div(vaultBalance).toNumber() / ROUND_NUMBER;

    const amounts: { [key: string]: number | null } = {};

    for (let i = 0; i < tokenCount; i++) {
        const _token = await contractVault.tokenByIndex(i);

        if (_token != token) {
            const _vaultBalance = await contractVault.approxBalance(_token);

            if (_vaultBalance.gt(0)) {
                const allocatedAmountRaw = _vaultBalance.mul(Math.floor(ratio * ROUND_NUMBER)).div(ROUND_NUMBER);

                const { decimals } = getTokenData(_token);
                amounts[_token] = parseBigNumber(allocatedAmountRaw, decimals);
            } else amounts[_token] = null;
        }
    }

    return amounts;
}
