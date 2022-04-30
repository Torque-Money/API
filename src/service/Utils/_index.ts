import { getTokenPrice as _getTokenPrice } from "../../utils";

// Get the price for a given token
export async function getTokenPrice(token: string) {
    return await _getTokenPrice(token);
}
