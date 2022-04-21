import axios from "axios";

import { BEEFY_API } from "../../../utils/constants";

async function routeBeefyAPY(name: string) {
    const url = `${BEEFY_API}/apy`;
    const { data } = await axios.get<{ [key: string]: number }>(url);

    return data[name] * 100;
}

export async function beefySpookyFTMUSDCLP() {
    return routeBeefyAPY("boo-ftm-usdc");
}
