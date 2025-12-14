import jwt from "jsonwebtoken";

export const loginUserService = async (email, password) => {
  const user = {
    id: 1,
    email: "admin@admin.com",
    password: "123456",
    role: "admin"
  };

  if (email !== user.email || password !== user.password) {
    throw new Error("Credenciales inválidas");
  }

  const token = jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  );

  return {
    message: "Login exitoso",
    token
  };
};