import { Schema, model } from "mongoose";

const groupSchema = new Schema(
  {
    company: {
      type: Schema.ObjectId,
      ref: "Company",
      required: true,
    },
    code: {
      type: String,
      required: true,
      unique : true,
      minlength: 3,
      maxlength: 30,
    },
    label: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 30,
    },
  },
  { timestamps: true },
);

const Group = model("Groups", groupSchema);

export default Group;
