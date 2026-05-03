import {Schema,model} from "mongoose";
import { FEATURES_TYPES_ENUM } from "../../shared/index.js";



const FeatureSchema = new Schema(
  {
    code: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 20,
      unique: true,
    },
    title: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 20,
    },
    type: {
      type: String,
      enums: Object.values(FEATURES_TYPES_ENUM),
      default : FEATURES_TYPES_ENUM.basic,
      required: true,
    },
    subtitle: {
      type: String,
      minlength: 3,
      maxlength: 50,
    },
    icon: {
      type: String,
    },
    link: {
      type: String,
      minlength: 3,
      maxlength: 20,
    },
    order: {
      type: Number,
      default: 1,
      min: 1,
    },
    status: {
      type: Boolean,
      default: true
    },
    parentFeature: {
      type: Schema.Types.ObjectId,
      ref: "Feature",
    },
  },
  { timestamps: true }
);

const Features =  model("Feature", FeatureSchema);

export default Features;
