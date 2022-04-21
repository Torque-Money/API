import express from "express";

import Vault from "./routes/Vault";
import VaultUser from "./routes/VaultUser";

const app = express();

app.use("/vault", Vault);
app.use("/vaultUser", VaultUser);

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});
