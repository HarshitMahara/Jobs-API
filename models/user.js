import mongoose from "mongoose";

const userSchema = mongoose.Schema({
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
  password:{
    type:String,
    minlength:6,
  }
});

const User = mongoose.model("User", userSchema);
console.log("User:", User);
export default User;
