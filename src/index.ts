import express from "express";
import cors from "cors";

import noteRoutes from "./routes/api/notes";
import "./db";

const app = express();
const PORT = 3000;

app.use(cors({ origin: "*" }));
app.use(express.json());

app.use("/api/notes", noteRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
