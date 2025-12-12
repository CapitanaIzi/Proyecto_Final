const notFoundMiddleware = (req, res, next) => {
  res.status(404).json({
    error: "Ruta no encontradaaa (404)",
    path: req.originalUrl
  });
};

export default notFoundMiddleware;