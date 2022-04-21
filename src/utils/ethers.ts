import ethers from "ethers";

export function loadEthers() {
    const RPC_URL = "https://rpc.ftm.tools/";

    const provider = new ethers.providers.JsonRpcProvider(RPC_URL);

    return provider;
}
