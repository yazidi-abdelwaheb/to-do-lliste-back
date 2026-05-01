import { Schema, model } from "mongoose";
import { _2FA_TYPE, USER_TYPE_ENUM } from "../../shared/index.js";

const UsersSchema = new Schema(
  {
    company: {
      type: Schema.ObjectId,
      ref: "Company",
      required: true,
    },
    firstName: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 30,
    },
    lastName: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 30,
    },
    email: { type: String, required: true, unique: true, maxlength: 100 },
    password: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: USER_TYPE_ENUM,
      default: USER_TYPE_ENUM.admin,
    },
    avatar: { type: string },
    isActive : {
      type : Boolean,
      default : true
    },
    isNew : {
      status : {
        type : Boolean,
        default : true,
      },
      password : {
        type : String
      }
    },
    _2FA: {
      type: {
        type: String,
        enum: _2FA_TYPE,
        require: true,
      },
      code: {
        type: String,
        length: 6,
        require: true,
      },
      attempts: {
        type: Number,
        default: 5,
      },
      createdAt: {
        type: Date,
        required: true,
      },
    },
  },
  { timestamps: true },
);

const Users = model("Users", UsersSchema);

export default Users;
