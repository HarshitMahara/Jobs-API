import express from "express";
import "dotenv/config";
import dbConnect from "./dbConnect.js";
import "express-async-errors";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";
import errorHandler from "./middleware/errorHandler.js";
import notFound from "./middleware/notFound.js";

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Jobs API</h1>");
});

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/job", jobRoutes);
app.use(notFound);
app.use(errorHandler);
const start = async () => {
  try {
    await dbConnect(process.env.MONGO_URL);
    console.log("Database Connected Successfully...");
    app.listen(PORT, () => {
      console.log(`Server is running at port: ${PORT}`);
    });
  } catch (error) {
    console.log("Error in DB Connect", error);
  }
};

start();
