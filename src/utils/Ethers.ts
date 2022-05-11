import { ethers } from "ethers";

import { ILensABI, ISupportsFeeABI, IVaultABI } from "../../abi";
import { ILens, ISupportsFee, IVault } from "../../types";

import { RPC_URL } from ".";

export const provider = new ethers.providers.JsonRpcProvider(RPC_URL);

export function loadContractLens(address: string) {
    return new ethers.Contract(address, ILensABI.abi, provider) as ILens;
}

export function loadContractSupportsFee(address: string) {
    return new ethers.Contract(address, ISupportsFeeABI.abi, provider) as ISupportsFee;
}

export function loadContractVault(address: string) {
    return new ethers.Contract(address, IVaultABI.abi, provider) as IVault;
}
