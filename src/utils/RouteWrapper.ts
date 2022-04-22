import { Request, Response } from "express";

export default function routeWrapper(fn: (req: Request, res: Response) => Promise<any>) {
    return async (req: Request, res: Response) => {
        try {
            await fn(req, res);
        } catch (e: any) {
            console.log(e);
            res.status(500).send(e.toString());
        }
    };
}
