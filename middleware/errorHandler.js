import CustomAPIERROR from "../errors/CustomAPIError.js";
import { StatusCodes } from "http-status-codes";

const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomAPIERROR)
    return res.status(err.stcode).json({ msg: err.message });
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err });
};

export default errorHandler;
