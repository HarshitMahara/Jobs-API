import CustomAPIError from "./CustomAPIError";
import { StatusCodes } from "http-status-codes";

class NotFoundError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.stcode = StatusCodes.NOT_FOUND;
  }
}

export default NotFoundError;
