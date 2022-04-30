import { Request, Response } from "express";

import { getUserVaultBalance, getUserVaultTVL } from "../../service/Lens";

// Takes in a wallet address and the vault and returns the TVL for that user
export async function HandleUserVaultTVL(req: Request, res: Response) {
    const vault = req.params.vault;
    const wallet = req.query.wallet as string;

    const tvl = await getUserVaultTVL(vault, wallet);

    res.json({ tvl });
}

// Takes in a wallet address, and the vault and returns the balance of the tokens for that user associated with the given vault
export async function HandleUserVaultBalance(req: Request, res: Response) {
    const vault = req.params.vault;
    const wallet = req.query.wallet as string;

    const balance = await getUserVaultBalance(vault, wallet);

    res.json({ balance });
}
