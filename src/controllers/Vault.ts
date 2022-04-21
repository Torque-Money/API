import { Request, Response } from "express";

import { getVaultAPY, getVaultFee, getVaultTVL } from "../service/Vault";
import { parseAddress, formatNumber } from "../utils/parse";

export async function HandleVaultTVL(req: Request, res: Response) {
    const vault = parseAddress(req.params.vault);

    const tvl = await getVaultTVL(vault);

    res.send(formatNumber(tvl));
}

export async function HandleVaultAPY(req: Request, res: Response) {
    const vault = parseAddress(req.params.vault);

    const apy = await getVaultAPY(vault);

    res.send(formatNumber(apy));
}

export async function HandleVaultFee(req: Request, res: Response) {
    const vault = parseAddress(req.params.vault);

    const fee = await getVaultFee(vault);

    res.send(formatNumber(fee));
}
