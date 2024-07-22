import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Provide Name"],
    minlength: 3,
    maxlength: 50,
  },
  email: {
    type: String,
    required: [true, "Please Provide Email"],
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: "Please Provide Valid Email",
    },
  },
  password: {
    type: String,
    minlength: 6,
  },
});

userSchema.pre("save", async function () {
  this.password = bcrypt.hashSync(this.password, 10);
});

userSchema.methods.getName = function () {
  return this.name;
};

userSchema.methods.getToken = function () {
  return jwt.sign(
    {
      userId: this._id,
      name: this.name,
    },
    process.env.JWT_TOKEN,
    {
      expiresIn: process.env.JWT_LIFETIME,
    }
  );
};

userSchema.methods.comparePassword = function (plainPass) {
  return bcrypt.compareSync(plainPass, this.password);
};

const User = mongoose.model("User", userSchema);
// console.log("User:", User);
export default User;
