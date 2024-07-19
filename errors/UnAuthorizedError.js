import CustomAPIError from "./CustomAPIError";
import { StatusCodes } from "http-status-codes";

class UnAuthorizedError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.stcode = StatusCodes.UNAUTHORIZED;
  }
}

export default UnAuthorizedError;
