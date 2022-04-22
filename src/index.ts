import express from "express";

import Vault from "./routes/Vault";
import UserVault from "./routes/UserVault";

const app = express();

app.use("/vault", Vault);
app.use("/userVault", UserVault);

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});
