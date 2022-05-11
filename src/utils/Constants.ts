export const ROUND_NUMBER = 1e4;

export const BEEFY_API = "https://api.beefy.finance";

const LOCAL_MODE = process.env.LOCAL_MODE && process.env.LOCAL_MODE === "local";

export const RPC_URL = LOCAL_MODE ? "http://localhost:8545" : "https://rpc.ftm.tools/";
