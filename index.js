import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import db from "./db.js";
import routePegawai from "./routes/pegawai.js";
import routeKinerja from "./routes/kinerja.js";
import routeGolongan from "./routes/golongan.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

// Routes
app.use("/", (req, res) => res.send("<h1>Selamat Datang di API Sistem Jenjang Karir</h1>"));
app.use("/api/pegawai", routePegawai);
app.use("/api/kinerja", routeKinerja);
app.use("/api/golongan", routeGolongan);

db.connect((err) => {
  if (err) {
    throw err;
  }
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});