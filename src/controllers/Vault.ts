import { Request, Response } from "express";

// Get the TVL of a particular vault
export function HandleVaultTVL(req: Request, res: Response) {
    const vault = req.params.vault;
}

// Get the APY of a particular vault
export function HandleVaultAPY(req: Request, res: Response) {
    const vault = req.params.vault;
}

// Get the fee for a particular vault
export function HandleVaultFee(req: Request, res: Response) {
    const vault = req.params.vault;
}
