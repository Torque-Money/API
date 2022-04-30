import { Request, Response } from "express";
import { getTokenPrice } from "../../service/Utils";

import { parseAddress } from "../../utils";

// Takes in a token and returns its price
export async function HandleTokenPrice(req: Request, res: Response) {
    const token = parseAddress(req.params.token);

    const price = await getTokenPrice(token);

    res.json({ price });
}
