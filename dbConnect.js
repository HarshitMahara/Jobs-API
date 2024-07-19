import mongoose from "mongoose";

// arrow function
const dbConnect = (url) => {
  return mongoose.connect(url);
};



export default dbConnect;
// noraml function
//  function dbConnect(url){
//     return mongoose.connect(url);
// }