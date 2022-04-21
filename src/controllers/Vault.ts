import { Request, Response } from "express";

import { getVaultAPY, getVaultFee, getVaultTVL } from "../service/Vault";

export async function HandleVaultTVL(req: Request, res: Response) {
    const vault = req.params.vault;

    res.send(await getVaultTVL(vault));
}

export async function HandleVaultAPY(req: Request, res: Response) {
    const vault = req.params.vault;

    res.send(await getVaultAPY(vault));
}

export async function HandleVaultFee(req: Request, res: Response) {
    const vault = req.params.vault;

    const fee = await getVaultFee(vault);

    res.send(fee.toString());
}
