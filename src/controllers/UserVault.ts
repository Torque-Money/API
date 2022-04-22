import { Request, Response } from "express";

import { parseAddress } from "../utils/Parse";

// Takes in a wallet address and the vault and returns the TVL for that user
export async function HandleUserVaultTVL(req: Request, res: Response) {
    const vault = parseAddress(req.params.vault);
}

// Takes in a wallet address, token, and the vault and returns the balance of the token for that user with the given vault
export async function HandleUserVaultBalance(req: Request, res: Response) {
    const vault = parseAddress(req.params.vault);
}

// Takes in a vault and a token and an amount of the associated token and returns the associated amount of the other tokens in the vault
export async function HandleUserVaultQuote(req: Request, res: Response) {
    const vault = parseAddress(req.params.vault);
}
