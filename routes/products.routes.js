import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "Obtener todos los productos" });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.json({ message: `Obtener producto con ID ${id}` });
});

router.post("/create", (req, res) => {
  const data = req.body;
  res.json({
    message: "Crear nuevo producto",
    recibido: data
  });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.json({ message: `Eliminar producto con ID ${id}` });
});

export default router;