import { Request, Response } from "express";
import { getUserVaultBalance, getUserVaultQuote, getUserVaultTVL } from "../service/lens/UserVault";

import { formatNumber, parseAddress, parseNumber } from "../utils/Parse";

// Takes in a wallet address and the vault and returns the TVL for that user
export async function HandleUserVaultTVL(req: Request, res: Response) {
    const vault = parseAddress(req.params.vault);

    const wallet = parseAddress(req.query.wallet as string);

    const tvl = await getUserVaultTVL(vault, wallet);

    res.send(parseNumber(tvl));
}

// Takes in a wallet address, and the vault and returns the balance of the tokens for that user associated with the given vault
export async function HandleUserVaultBalance(req: Request, res: Response) {
    const vault = parseAddress(req.params.vault);

    const wallet = parseAddress(req.query.wallet as string);

    const balance = await getUserVaultBalance(vault, wallet);

    res.json(balance);
}

// Takes in a vault and a token and an amount of the associated token and returns the associated amount of the other tokens in the vault
export async function HandleUserVaultQuote(req: Request, res: Response) {
    const vault = parseAddress(req.params.vault);

    const token = parseAddress(req.query.token as string);
    const amount = parseFloat(req.query.amount as string);

    const quote = await getUserVaultQuote(vault, token, amount);

    res.json(quote);
}
