"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Vault_1 = __importDefault(require("./routes/Vault"));
const app = (0, express_1.default)();
app.use("/vault", Vault_1.default);
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});
