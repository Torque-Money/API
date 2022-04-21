import axios from "axios";

import { BEEFY_API } from "../../../utils/constants";

export async function beefySpookyFTMUSDCLP() {
    const url = `${BEEFY_API}/apy`;
    const { data } = await axios.get<{ [key: string]: number }>(url);

    return data["boo-ftm-usdc"] * 100;
}
