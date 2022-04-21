import IStrategy from "../../abi/IStrategy.json";
import IVaultV1 from "../../abi/IVaultV1.json";

const RPC_URL = "https://rpc.ftm.tools/";

export function loadContractVault(vault: string) {
    const provider = new ethers.providers.JsonRpcProvider(RPC_URL);

    return new ethers.Contract(vault, IStrategy.abi, provider);
}

export function loadContractStrategy(strategy: string) {
    const provider = new ethers.providers.JsonRpcProvider(RPC_URL);

    return new ethers.Contract(strategy, IVaultV1.abi, provider);
}
