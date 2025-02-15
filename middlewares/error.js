export const errorMiddleware = () => {
  err.message ||= "internal server error";
  err.statusCode ||= 500;

  if (err.name === "CastError") err.message = "Invalid ID";
  return res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};

export const TryCatch = (func) => (req, res, next) => {
  return Promise.resolve(func(req, res, next)).catch(next);
};
