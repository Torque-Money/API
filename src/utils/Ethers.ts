import { ethers } from "ethers";

import { ILensABI, IRegistryABI, IStrategyABI, ISupportsFeeABI, IVaultABI } from "../../abi";
import { ILens, IRegistry, IStrategy, ISupportsFee, IVault } from "../../types";

import { RPC_URL } from ".";

export const provider = new ethers.providers.JsonRpcProvider(RPC_URL);

export function loadContractLens(address: string) {
    return new ethers.Contract(address, ILensABI.abi, provider) as ILens;
}

export function loadContractRegistry(address: string) {
    return new ethers.Contract(address, IRegistryABI.abi, provider) as IRegistry;
}

export function loadContractStrategy(address: string) {
    return new ethers.Contract(address, IStrategyABI.abi, provider) as IStrategy;
}

export function loadContractSupportsFee(address: string) {
    return new ethers.Contract(address, ISupportsFeeABI.abi, provider) as ISupportsFee;
}

export function loadContractVault(address: string) {
    return new ethers.Contract(address, IVaultABI.abi, provider) as IVault;
}
