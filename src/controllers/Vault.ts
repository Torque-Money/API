import { Request, Response } from "express";

import { getVaultAPY, getVaultFee, getVaultTVL } from "../service/Vault";

// **** We need to run some parsers on these
// **** We also need to run the parser for the bignumber returned by the contracts

export async function HandleVaultTVL(req: Request, res: Response) {
    const vault = req.params.vault;

    return getVaultTVL(vault);
}

export async function HandleVaultAPY(req: Request, res: Response) {
    const vault = req.params.vault;

    return getVaultAPY(vault);
}

export async function HandleVaultFee(req: Request, res: Response) {
    const vault = req.params.vault;

    return getVaultFee(vault);
}
