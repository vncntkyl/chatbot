import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { Database } from "./models/db.controller";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 1211;

app.use(cors({ origin: "*" }));
app.use(express.text());
app.use(express.json());

app.get("/", (_, res) => {
  res.send("Running on local machine...");
});

app.get("/test", async (_, res) => {
  const results = await Database.query("SELECT * FROM script");
  res.status(200).send(results);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
