import { Schema, model } from "mongoose";

const groupFeatureSchema = new Schema(
  {
    feature: {
      type: Schema.ObjectId,
      ref: "Features",
      required: true,
    },
    group: {
      type: Schema.ObjectId,
      ref: "Groups",
      required: true,
    },
    list:{
        type : Boolean,
        default : false,
    },
    create:{
        type : Boolean,
        default : false,
    },
    read:{
        type : Boolean,
        default : false,
    },
    update:{
        type : Boolean,
        default : false,
    },
    delete:{
        type : Boolean,
        default : false,
    },
    isActive:{
        type : Boolean,
        default : true
    }
    
  },
  { timestamps: true },
);

const GroupFeature = model("GroupFeature", groupFeatureSchema);

export default GroupFeature;
