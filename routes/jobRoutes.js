import express from "express";
import {
  addJob,
  getJob,
  getJobs,
  removeJob,
  updateJob,
} from "../controllers/jobController.js";

const jobRoutes = express.Router();

jobRoutes.route("/").get(getJobs).post(addJob);
jobRoutes.route("/:id").get(getJob).delete(removeJob).patch(updateJob);

export default jobRoutes;