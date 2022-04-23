import axios from "axios";

import { BEEFY_API } from "../../utils/Constants";

const tokenData: { [key: string]: () => Promise<number> } = {
    "0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83": async () => {
        return await routeBeefyPrice("FTM");
    },
    "0x04068da6c83afcfa0e13ba15a6696662335d5b75": async () => {
        return await routeBeefyPrice("USDC");
    },
};

async function routeBeefyPrice(name: string) {
    const url = `${BEEFY_API}/prices`;
    const { data } = await axios.get<{ [key: string]: number }>(url);

    return data[name];
}

export async function getTokenPrice(token: string) {
    return await tokenData[token]();
}
