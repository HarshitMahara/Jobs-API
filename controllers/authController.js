import { StatusCodes } from "http-status-codes";
import User from "../models/user.js";
import pkg from "jsonwebtoken";
const { JsonWebTokenError, sign } = pkg;
// import BadRequestError from "../errors/BadRequestError.js";

export const login = async (req, res) => {
  res.send("LogIn");
};

export const register = async (req, res) => {
  // const { name, email, password } = req.body;
  // if (!name || !email || !password) {
  //   throw new BadRequestError("Please provide name, email and password");
  // }
  // const hashedPassword = bcrypt.hashSync(password, 10);
  // const tempUser = { name, email, password: hashedPassword };
  // console.log(tempUser);
  const user = await User.create(req.body);
  const token=user.getToken();

  res.status(StatusCodes.CREATED).json({ name: user.getName(), token });
};
