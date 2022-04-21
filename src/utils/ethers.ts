import { ethers } from "ethers";

import BeefyLPStrategy from "../../abi/BeefyLPStrategy.json";
import TorqueVaultV1 from "../../abi/TorqueVaultV1.json";

const RPC_URL = "https://rpc.ftm.tools/";

export function loadContractTorqueVaultV1(vault: string) {
    const provider = new ethers.providers.JsonRpcProvider(RPC_URL);

    return new ethers.Contract(vault, TorqueVaultV1.abi, provider);
}

export function loadContractBeefyLPStrategy(strategy: string) {
    const provider = new ethers.providers.JsonRpcProvider(RPC_URL);

    return new ethers.Contract(strategy, BeefyLPStrategy.abi, provider);
}
