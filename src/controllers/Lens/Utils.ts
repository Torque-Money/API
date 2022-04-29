import { Request, Response } from "express";

import { getUserVaultQuote } from "../../service/Lens";
import { parseAddress } from "../../utils";

// Takes in a vault and a token and an amount of the associated token and returns the associated amount of the other tokens in the vault
export async function HandleUserVaultQuote(req: Request, res: Response) {
    const vault = parseAddress(req.params.vault);

    const token = parseAddress(req.query.token as string);
    const amount = parseFloat(req.query.amount as string);

    const quote = await getUserVaultQuote(vault, token, amount);

    res.json(quote);
}
