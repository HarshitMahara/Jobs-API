import CustomAPIError from "./CustomAPIError";
import { StatusCodes } from "http-status-codes";

class BadRequestError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.stcode = StatusCodes.BAD_REQUEST;
  }
}

export default BadRequestError;
