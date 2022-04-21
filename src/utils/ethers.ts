import ethers from "ethers";

import IStrategy from "../../abi/IStrategy.json";
import IVaultV1 from "../../abi/IVaultV1.json";

const RPC_URL = "https://rpc.ftm.tools/";

export const provider = new ethers.providers.JsonRpcProvider(RPC_URL);

export function loadContractVault(vault: string) {
    return new ethers.Contract(vault, IStrategy.abi, provider);
}

export function loadContractStrategy(strategy: string) {
    return new ethers.Contract(strategy, IVaultV1.abi, provider);
}
