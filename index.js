import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import productsRoutes from "./routes/products.routes.js";
import errorsRoutes from "./routes/errors.routes.js";
import notFoundMiddleware from "./middlewares/notFound.middleware.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/auth", authRoutes);
app.use("/api", productsRoutes);   
app.use("/errors", errorsRoutes);

app.use(notFoundMiddleware);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});