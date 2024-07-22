import mongoose from "mongoose";

// arrow function
const dbConnect = (url) => {
  return mongoose.connect(url);
};

export default dbConnect;
// normal function
//  function dbConnect(url){
//     return mongoose.connect(url);
// }
