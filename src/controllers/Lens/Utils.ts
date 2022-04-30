import { Request, Response } from "express";

import { getUserVaultQuote } from "../../service/Lens";

// Takes in a vault and a token and an amount of the associated token and returns the associated amount of the other tokens in the vault
export async function HandleUserVaultQuote(req: Request, res: Response) {
    const vault = req.params.vault;
    const token = req.query.token as string;
    const amount = parseFloat(req.query.amount as string);

    const quote = await getUserVaultQuote(vault, token, amount);

    res.json({ quote });
}
