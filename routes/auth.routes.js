import { Router } from "express";

const router = Router();

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  res.json({
    message: "Intento de login",
    email,
    password
  });
});

export default router;