import { Schema, model } from "mongoose";

const CompanySchema = new Schema(
  {
    code: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 30,
      unique: true,
    },
    title: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 30,
    },
    nbrUsers: {
      type: Number,
      required: true,
      min : 1,
      max : 100,
      default: 1,
    },
  },
  { timestamps: true },
);

const Company = model("Company", CompanySchema);

export default Company;
