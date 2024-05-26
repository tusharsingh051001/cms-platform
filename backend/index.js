import express from "express";
import dotenv from "dotenv";
import { dataRoute, claimtTypeRoute } from "./routes/!routesExports.js";
import connectToDb from "./db/index.db.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("App is working. Hello world!!");
});

app.use("/api/data", dataRoute);

app.listen(PORT, () => {
  connectToDb();
  console.log(`Server is online at: http://localhost:${PORT}`);
});
