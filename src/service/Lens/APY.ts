import axios from "axios";

import { BEEFY_API, parseAddress } from "../../utils";

const strategies: { [key: string]: () => Promise<number> } = {
    "0x529561dfa18f6ec726e5184579c018c202ea41ec": async () => {
        return await routeBeefyAPY("sushi-usdc-wftm");
    },
    "0x2439af5ff20bd173f80a8c842d5bea04e370ec57": async () => {
        return await routeBeefyAPY("spirit-ftm-usdc");
    },
    "0xd703b3b90e25f2d46f59f4578bddca2c5a49c275": async () => {
        return await routeBeefyAPY("wigo-usdc-ftm");
    },
    "0xeaccf1f6dc9f7f77cf81fc00ff8bc77065778999": async () => {
        return await routeBeefyAPY("boo-ftm-usdc");
    },
};

async function routeBeefyAPY(name: string) {
    const url = `${BEEFY_API}/apy`;
    const { data } = await axios.get<{ [key: string]: number }>(url);

    return data[name];
}

export async function getStrategyAPY(strategy: string) {
    return await strategies[parseAddress(strategy)]();
}
