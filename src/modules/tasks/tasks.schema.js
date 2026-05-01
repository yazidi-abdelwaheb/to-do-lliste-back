import mongoose from "mongoose";
import { TASK_PRIORATE_ENUM, TASK_STATUS_ENUM } from "../../shared/index.js";

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 100,
    },
    description: {
      type: String,
      trim: true,
      maxlength: 1500,
    },
    status: {
      type: String,
      enum: TASK_STATUS_ENUM,
      default: TASK_STATUS_ENUM.pending,
    },
    priority: {
      type: String,
      enum: TASK_PRIORATE_ENUM,
      default: TASK_PRIORATE_ENUM.medium,
    },
    dueDate: { type: Date },
    completedAt: { type: Date },
    project: { type: mongoose.Schema.Types.ObjectId, ref: "Project", required: true },
    assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true } 
);


const Tasks = mongoose.model("Tasks", taskSchema);

export default Tasks;
