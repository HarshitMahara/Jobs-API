import { StatusCodes } from "http-status-codes";
import User from "../models/user.js";
import BadRequestError from "../errors/BadRequestError.js";
import UnAuthorizedError from "../errors/UnAuthorizedError.js";
import pkg from "jsonwebtoken";
const { JsonWebTokenError, sign } = pkg;

export const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    throw new BadRequestError("Please provide email and password");
  const user = await User.findOne({ email });

  if (!user) throw new UnAuthorizedError("Invalid email/password");
  const isPasswordMatch = await user.comparePassword(password);

  const token = user.getToken();
  res.status(StatusCodes.OK).json({ user: { name: user.getName() }, token });
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
  const token = user.getToken();

  res.status(StatusCodes.CREATED).json({ name: user.getName(), token });
};
