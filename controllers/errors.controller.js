export const error401 = (req, res) => {
  const autorizado = false;
  if (!autorizado) {
    return res.status(401).json({ error: "No autenticado (401)" });
  }
  res.status(200).json({ message: "Autorizado (401)" });
};

export const error400 = (req, res) => {
  const { nombre } = req.body;
  if (!nombre) {
    return res.status(400).json({ error: "Falta el campo 'nombre' (400)" });
  }
  res.status(200).json({ message: "Datos correctos (400)" });
};

export const error403 = (req, res) => {
  const esAdmin = false;
  if (!esAdmin) {
    return res.status(403).json({ error: "Acceso prohibido (403)" });
  }
  res.status(200).json({ message: "Acceso permitido (403)" });
};