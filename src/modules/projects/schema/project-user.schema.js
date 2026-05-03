import mongoose from "mongoose";

const projectUserSchema = new mongoose.Schema(
  {
    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      required: true,
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    role: {
      type: String,
      enum: ["owner", "collaborator", "viewer"],
      default: "viewer",
    },
    addedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const ProjectUser = mongoose.model("ProjectUser", projectUserSchema);

export default ProjectUser;
