import { Request, Response } from "express";

import { getVaultAPY, getVaultFee, getVaultTVL } from "../service/Vault";
import { parseAddress, formatNumber, parseNumber } from "../utils/Parse";

// Takes in the vault and returns the TVL for that vault
export async function HandleVaultTVL(req: Request, res: Response) {
    const vault = parseAddress(req.params.vault);

    const tvl = await getVaultTVL(vault);

    res.send(parseNumber(tvl));
}

// Takes in the vault and returns the APY for that vault
export async function HandleVaultAPY(req: Request, res: Response) {
    const vault = parseAddress(req.params.vault);

    const apy = await getVaultAPY(vault);

    res.send(formatNumber(apy));
}

// Takes in the vault and returns the fee percent and amount for that vault
export async function HandleVaultFee(req: Request, res: Response) {
    const vault = parseAddress(req.params.vault);

    const [feeAmount, feePercent] = await getVaultFee(vault);

    res.json({ feeAmount: formatNumber(feeAmount), feePercent: formatNumber(feePercent) });
}
