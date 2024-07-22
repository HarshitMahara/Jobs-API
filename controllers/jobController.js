import { StatusCodes } from "http-status-codes";
import Job from "../models/Job.js";

export const getJobs = (req, res) => {
  res.send("Get All jobs");
};

export const getJob = (req, res) => {
  res.send("Get a job");
};

export const addJob = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

export const removeJob = (req, res) => {
  res.send("Remove Job");
};
export const updateJob = (req, res) => {
  res.send("Update Job");
};
