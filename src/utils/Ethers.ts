import { ethers } from "ethers";

import BeefyLPStrategyABI from "../../abi/BeefyLPStrategy.json";
import TorqueVaultV1ABI from "../../abi/TorqueVaultV1.json";
import { BeefyLPStrategy, TorqueVaultV1 } from "../../types";

const RPC_URL = "https://rpc.ftm.tools/";

export const provider = new ethers.providers.JsonRpcProvider(RPC_URL);

export function loadContractTorqueVaultV1(vault: string) {
    return new ethers.Contract(vault, TorqueVaultV1ABI.abi, provider) as TorqueVaultV1;
}

export function loadContractBeefyLPStrategy(strategy: string) {
    return new ethers.Contract(strategy, BeefyLPStrategyABI.abi, provider) as BeefyLPStrategy;
}
