import { loginUserService } from "../services/auth.service.js";

export const loginUserController = async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await loginUserService(email, password);
    res.json(result);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};