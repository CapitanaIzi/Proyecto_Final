import jwt from "jsonwebtoken";

export const loginUserController = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (email !== "admin@admin.com" || password !== "123456") {
      return res.status(401).json({ error: "Credenciales inválidas" });
    }

    const payload = { email };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({
      message: "Login exitoso",
      token,
    });
  } catch (error) {
    res.status(500).json({ error: "Error en el servidor" });
  }
};