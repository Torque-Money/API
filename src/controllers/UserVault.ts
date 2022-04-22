import { Request, Response } from "express";

import { parseAddress } from "../utils/Parse";

export async function HandleUserVaultTVL(req: Request, res: Response) {
    const vault = parseAddress(req.params.vault);
}

export async function HandleUserVaultBalance(req: Request, res: Response) {
    const vault = parseAddress(req.params.vault);
}

export async function HandleUserVaultQuote(req: Request, res: Response) {
    const vault = parseAddress(req.params.vault);
}
