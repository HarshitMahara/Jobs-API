import UnAuthorizedError from "../errors/UnAuthorizedError.js";
import jwt from "jsonwebtoken";
const authorization = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer "))
    throw new UnAuthorizedError("You are not authorized to access this route");
  const token = authHeader.split(" ")[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_TOKEN);
    req.user = {
      userId: payload.userId,
      name: payload.name,
    };
    next();
  } catch (error) {
    throw new UnAuthorizedError("Authentication Invalid");
  }
};
export default authorization;
