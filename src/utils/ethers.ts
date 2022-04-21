import ethers from "ethers";

export function loadEthers() {
    const RPC_URL = "https://rpc.ftm.tools/";

    return new ethers.providers.JsonRpcProvider(RPC_URL);
}
