import { BigNumber } from "ethers";
import tokenData from "../data/Token";
import { loadContractTorqueVaultV1 } from "../utils/Ethers";
import { parseAddress, parseBigNumber } from "../utils/Parse";
import { getPrice } from "./Prices";

// Get the users TVL
export async function getUserVaultTVL(vault: string, wallet: string) {
    const contractVault = loadContractTorqueVaultV1(vault);

    let tvl = 0;

    const shares: BigNumber = await contractVault.balanceOf(wallet);
    if (shares.eq(0)) return tvl;

    const tokenAmount: BigNumber[] = await contractVault.estimateRedeem(shares);

    for (let i = 0; i < tokenAmount.length; i++) {
        const token = parseAddress(await contractVault.tokenByIndex(i));

        const decimals = tokenData[token].decimals;

        const amount = parseBigNumber(tokenAmount[i], decimals);

        tvl += (await getPrice(token)) * amount;
    }

    return tvl;
}
