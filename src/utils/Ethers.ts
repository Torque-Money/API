import { ethers } from "ethers";

import {} from "../../abi";
import {} from "../../types";

const RPC_URL = "https://rpc.ftm.tools/";

export const provider = new ethers.providers.JsonRpcProvider(RPC_URL);

export function loadContractTorqueVaultV1(vault: string) {
    return new ethers.Contract(vault, TorqueVaultV1ABI.abi, provider);
}

export function loadContractBeefyLPStrategy(strategy: string) {
    return new ethers.Contract(strategy, BeefyLPStrategyABI.abi, provider);
}
