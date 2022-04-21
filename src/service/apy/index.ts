import { beefySpookyFTMUSDCLP } from "./strategies/BeefyLP";

const data: { [key: string]: () => Promise<number> } = {
    "0x6Ad07E659563490d40377a98a7f0f62ed7d38C41": beefySpookyFTMUSDCLP,
};

export default async function getAPY(address: string) {
    return await data[address]();
}
