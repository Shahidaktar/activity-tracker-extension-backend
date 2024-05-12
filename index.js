import express from "express";

import tabRoute from "./routes/tab.js";

import { connectDB } from "./utils/features.js";
import { errorMiddleware } from "./middlewares/error.js";
import { config } from "dotenv";
import cors from "cors";
import morgan from "morgan";

config({
  path: "./.env",
});

const port = process.env.PORT || 4000;
const mongoUri = process.env.MONGO_URI || "";

connectDB(mongoUri);


const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.get("/", (req, res) => {
  res.send("API Working with /api/v1");
});

app.use("/api/v1/tab", tabRoute);

app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Server is working on http://localhost:${port}`);
});
