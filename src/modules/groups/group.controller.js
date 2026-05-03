import { errorCatch } from "../../shared/index.js";
import GroupFeature from "./schema/group-feature.schema.js";
import Group from "./schema/group.schema.js";

const model = Group;

export default class GroupController {
  static async getList(req, res) {
    /*try {
      const { search, limit, page } = req.query;
  
     // const { data, totalelement, totalPages, currentPage, pageLimit } =
       //       await paginatorsSearched(model, page, limit, search);
  
      res.status(200).json({
        users : data,
        totalUsers : totalelement,
        totalPages,
        currentPage,
        pageLimit,
      });
    } catch (error) {
      return errorCatch(req,res,error);
    }*/
  }

  static async createOne(req, res) {
    try {
      const { group, groupFeatures } = req.body;
      const groupModel = await new model(group).save();

      for (groupFeature in groupFeatures) {
        const groupFeatureModel = new GroupFeature();
        groupFeatureModel.group = groupModel._id;
        groupFeatureModel.feature = groupFeature.feature._id;

        groupFeatureModel.list = groupFeature.list;
        groupFeatureModel.create = groupFeature.create;
        groupFeatureModel.read = groupFeature.read;
        groupFeatureModel.delete = groupFeature.delete;
        groupFeatureModel.update = groupFeature.update;
        groupFeatureModel.isActive = groupFeature.isActive;

        await groupFeatureModel.save();
      }

      res.status(200).json({ message: "Group saved successfully." });
    } catch (error) {
      return errorCatch(req, res, error);
    }
  }

  static async readOne(req, res) {
    try {
      const { id } = req.params;
      const group = await model.findById(id);
      const groupFeatures = await GroupFeature.find({ group: id }).populate(
        "feature",
        "title icon",
      );
      res.status(200).json({ group, groupFeatures });
    } catch (error) {
      return errorCatch(req, res, error);
    }
  }

  static async updateOne(req, res) {
    try {
      const {id} = req.params
      const { group, groupFeatures } = req.body;
      await model.updateOne({_id:id},group);

      await GroupFeature.deleteMany({group : id});

      for (groupFeature in groupFeatures) {
        const groupFeatureModel = new GroupFeature();
        groupFeatureModel.group = groupModel._id;
        groupFeatureModel.feature = groupFeature.feature._id;

        groupFeatureModel.list = groupFeature.list;
        groupFeatureModel.create = groupFeature.create;
        groupFeatureModel.read = groupFeature.read;
        groupFeatureModel.delete = groupFeature.delete;
        groupFeatureModel.update = groupFeature.update;
        groupFeatureModel.isActive = groupFeature.isActive;

        await groupFeatureModel.save();
      }

      res.status(200).json({ message: "group updated successfully." });
    } catch (error) {
      return errorCatch(req, res, error);
    }
  }

  static async deleteOne(req, res) {
    try {
      const {id} = req.params
      await model.deleteOne({_id:id});
      await GroupFeature.deleteMany({group :id});
      
      res.status(200).json({ message: "user deleted successfully." });
    } catch (error) {
      return errorCatch(req, res, error);
    }
  }
}
