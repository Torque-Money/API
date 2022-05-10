import { Request, Response } from "express";

import { getVaultAPY, getVaultBalance, getVaultFeePercent, getVaultTokens, getVaultTVL } from "../../service/Lens";

// Takes in the vault and returns the tokens the vault accepts
export async function HandleVaultTokens(req: Request, res: Response) {
    const vault = req.params.vault;

    const tokens = await getVaultTokens(vault);

    res.json({ tokens });
}

// Takes in the vault and returns the TVL for that vault
export async function HandleVaultTVL(req: Request, res: Response) {
    const vault = req.params.vault;

    const tvl = await getVaultTVL(vault);

    res.json({ tvl });
}

// Takes in the vault and returns the APY for that vault
export async function HandleVaultAPY(req: Request, res: Response) {
    const vault = req.params.vault;

    const apy = await getVaultAPY(vault);

    res.json({ apy });
}

// Takes in the vault and returns the fee percent and amount for that vault
export async function HandleVaultFee(req: Request, res: Response) {
    const vault = req.params.vault;

    const fee = await getVaultFeePercent(vault);

    res.json({ fee });
}

// Takes in a vault and returns the total balance for each asset in the vault
export async function HandleVaultBalance(req: Request, res: Response) {
    const vault = req.params.vault;

    const balance = await getVaultBalance(vault);

    res.json({ balance });
}
