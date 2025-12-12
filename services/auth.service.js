export const loginUserService = async (email, password) => {
  const validUser = {
    email: "test@test.com",
    password: "123456"
  };

  if (email === validUser.email && password === validUser.password) {
    return { token: "TOKEN-DE-EJEMPLO" };
  }

  throw new Error("Credenciales inválidas");
};