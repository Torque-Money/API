import { loadContractVault } from "../utils/ethers";
import getAPY from "./apy";

// Get the TVL of a particular vault
export async function getVaultTVL(vault: string) {}

// Get the APY of a particular vault
export async function getVaultAPY(vault: string) {
    const contractVault = loadContractVault(vault);

    const strategy = await contractVault.getStrategy();

    return getAPY(strategy);
}

// Get the fee for a particular vault
export async function getVaultFee(vault: string) {}
