import axios from "axios";

import { BEEFY_API, parseAddress } from "../../utils";

const strategies: { [key: string]: () => Promise<number> } = {
    "0x529561Dfa18F6Ec726E5184579C018c202eA41EC": async () => {
        return await routeBeefyAPY("sushi-usdc-wftm");
    },
    "0x2439AF5Ff20Bd173f80a8c842d5bEa04E370EC57": async () => {
        return await routeBeefyAPY("spirit-ftm-usdc");
    },
    "0xd703B3B90E25f2D46f59F4578bDdca2C5A49c275": async () => {
        return await routeBeefyAPY("wigo-usdc-ftm");
    },
    "0xEACcF1f6dC9f7f77cF81Fc00FF8bc77065778999": async () => {
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
