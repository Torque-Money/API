import express from "express";

import Lens from "./routes/Lens";

const app = express();

app.use("/lens", Lens);

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});
