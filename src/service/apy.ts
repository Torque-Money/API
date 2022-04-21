import axios from "axios";

import { BEEFY_API } from "../utils/constants";

const data: { [key: string]: () => Promise<number> } = {
    "0x6Ad07E659563490d40377a98a7f0f62ed7d38C41": async () => {
        return routeBeefyAPY("boo-ftm-usdc");
    },
};

async function routeBeefyAPY(name: string) {
    const url = `${BEEFY_API}/apy`;
    const { data } = await axios.get<{ [key: string]: number }>(url);

    return data[name] * 100;
}

export default async function getAPY(address: string) {
    return await data[address]();
}
