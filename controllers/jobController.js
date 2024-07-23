import { StatusCodes } from "http-status-codes";
import Job from "../models/Job.js";
import NotFoundError from "../errors/NotFoundError.js";

export const getJobs = async (req, res) => {
  const jobs = await Job.find({ createdBy: req.user.userId });
  return res.status(StatusCodes.OK).json({ nbHits: jobs.length, jobs });
};

export const getJob = async (req, res) => {
  const {
    user: { userId },
    params: { id: jobId },
  } = req;
  const job = await Job.findOne({ _id: jobId, createdBy: userId });
  if (!job) throw new NotFoundError(`Job id with :${jobId} not found`);
  res.status(StatusCodes.OK).json({ job });
};

export const addJob = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

export const removeJob = async (req, res) => {
  const {
    user: { userId },
    params: { id: jobId },
  } = req;
  const job = await Job.findOneAndDelete({ _id: jobId, createdBy: userId });
  if (!job) throw new NotFoundError(`Job id with :${jobId} not found`);
  res.status(StatusCodes.OK).json({ msg: "Job removed" });
};

export const updateJob = async (req, res) => {
  const {
    user: { userId },
    params: { id: jobId },
    body: { company, status, position },
  } = req;
  const job = await Job.findOneAndUpdate(
    {
      _id: jobId,
      createdBy: userId,
    },
    req.body,
    { new: true, runValidators: true }
  );
  if (!job) throw new NotFoundError(`Job id with :${jobId} not found`);
  res.status(StatusCodes.OK).json({ job });
};
