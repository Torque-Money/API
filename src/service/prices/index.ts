const tokenData: { [key: string]: () => Promise<number> } = {};

// **** This will get the price from the different price string
async function beefyPrice(name: string) {}

export async function getPrice(token: string) {
    return tokenData[token]();
}
