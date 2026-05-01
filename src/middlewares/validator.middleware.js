import { validationResult } from "express-validator";

/********************** ERROR VALIDATOR MIDDLEWARES  **********************/

export const checkValidatorErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: "Validation failed",
      error: errors.array().map((err) => ({
        field: err.param,
        message: err.msg,
      })),
    });
  }

  next();
};
