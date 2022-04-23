import express from "express";

import { Vault } from "./routes/Lens";

const app = express();

app.use("/lens/vault", Vault);
app.use("/lens/userVault", UserVault);

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});
