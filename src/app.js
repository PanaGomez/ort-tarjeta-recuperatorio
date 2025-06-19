import express from "express";
import creditCardRouter from "./routes/creditcard.router.js";

const app = express();
app.use(express.json());
app.use("/api/cards", creditCardRouter);

export default app;
