import { Request, Response } from "express";

import { getVaultAPY, getVaultFee, getVaultTVL } from "../service/Vault";
import { parseAddress } from "../utils/parse";

export async function HandleVaultTVL(req: Request, res: Response) {
    const vault = parseAddress(req.params.vault);

    const tvl = await getVaultTVL(vault);

    res.send(tvl.toString());
}

export async function HandleVaultAPY(req: Request, res: Response) {
    const vault = parseAddress(req.params.vault);

    const apy = await getVaultAPY(vault);

    res.send(apy.toString());
}

export async function HandleVaultFee(req: Request, res: Response) {
    const vault = parseAddress(req.params.vault);

    const fee = await getVaultFee(vault);

    res.send(fee.toString());
}
