import express from "express";
import { allTabs, newTab } from "../controllers/tab.js";
// import { adminOnly } from "../middlewares/auth.js";

const app = express.Router();

app.post("/new", newTab);

app.get("/all", allTabs);

// app.route("/:id").get(getUser).delete(adminOnly, deleteUser);

export default app;
