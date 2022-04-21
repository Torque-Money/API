import { Request, Response } from "express";

// **** Now I need to get the data from each of these, and then go through and parse it into JSON for the response

// Get the TVL of a particular vault
export async function HandleVaultTVL(req: Request, res: Response) {
    const vault = req.params.vault;
}

// Get the APY of a particular vault
export async function HandleVaultAPY(req: Request, res: Response) {
    const vault = req.params.vault;
}

// Get the fee for a particular vault
export async function HandleVaultFee(req: Request, res: Response) {
    const vault = req.params.vault;
}
