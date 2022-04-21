import express from "express";

const app = express();

// **** How do I make handlers and routes and stuff again ?

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});
