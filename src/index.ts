import express from "express";

import Vault from "./routes/Vault";

const app = express();

app.use("/vault", Vault);

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});
