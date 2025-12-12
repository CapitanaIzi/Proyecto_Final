import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import errorRoutes from "./routes/errors.routes.js";
import productRoutes from "./routes/products.routes.js";
import authRoutes from "./routes/auth.routes.js";


dotenv.config();
const app = express();

app.use(express.json()); 
app.use(cors());
app.use(bodyParser.json()); 
app.use("/api/products", productRoutes);
app.use("/auth", authRoutes);

const PORT = process.env.PORT || 3000;

app.use("/errors", errorRoutes);

app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada (404)" });
});

app.use((err, req, res, next) => {
  console.error("Error interno:", err.stack);
  res.status(500).json({ error: "Error interno del servidor (500)" });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});