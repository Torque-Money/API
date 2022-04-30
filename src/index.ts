import express from "express";
import cors from "cors";

import Lens from "./routes/Lens";
import Utils from "./routes/Utils";

const app = express();

app.use(cors());

app.use("/lens", Lens);
app.use("/utils", Utils);

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
    console.log(`Listening on port 'http://localhost:${PORT}'...`);
});
