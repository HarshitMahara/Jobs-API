import { StatusCodes } from "http-status-codes";
import CustomAPIError from "./CustomAPIError.js";

class BadRequestError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.stcode = StatusCodes.BAD_REQUEST;
  }
}

export default BadRequestError;
