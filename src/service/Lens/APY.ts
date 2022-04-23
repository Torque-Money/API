import axios from "axios";

import { BEEFY_API } from "../../utils/Constants";

const strategies: { [key: string]: () => Promise<number> } = {
    "0x6ad07e659563490d40377a98a7f0f62ed7d38c41": async () => {
        return await routeBeefyAPY("boo-ftm-usdc");
    },
};

async function routeBeefyAPY(name: string) {
    const url = `${BEEFY_API}/apy`;
    const { data } = await axios.get<{ [key: string]: number }>(url);

    return data[name] * 100;
}

export async function getStrategyAPY(strategy: string) {
    return await strategies[strategy]();
}
