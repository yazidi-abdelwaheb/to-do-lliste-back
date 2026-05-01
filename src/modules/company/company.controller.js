import { errorCatch } from "../../shared/index.js";
import Features from "./company.schema.js";

const model = Features 

export default class FeaturesController{
  static async getList(req, res) {
    try {
      const { search, limit, page } = req.query;
  
      const { data, totalelement, totalPages, currentPage, pageLimit } =
        await paginatorsSearched(model, page, limit, search);
  
      res.status(200).json({
        features : data,
        totalTasks : totalelement,
        totalPages,
        currentPage,
        pageLimit,
      });
    } catch (error) {
      return errorCatch(req,res,error);
    }
  }

  static async createOne (req, res)   {
    try {
      const { feature } = req.body;
      await new model(feature).save();
      res.status(200).json({ message: "Feature saved successfully." });
    } catch (error) {
      return errorCatch(req,res,error);
    }
  };
  
 
  
  static async readOne (req, res)   {
    try {
      const feature = await model.findById(req.params.id);
      res.status(200).json(feature);
    } catch (error) {
      return errorCatch(req,res,error);
    }
  };
  
  static async updateOne (req, res)   {
    try {
      const { feature } = req.body;
      await model.findByIdAndUpdate(req.params.id, feature);
      res.status(200).json({ message: "Feature updeted successfully." });
    } catch (error) {
      return errorCatch(req,res,error);
    }
  };
  
  static async deleteOne (req, res)   {
    try {
      await model.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: "Feature deleted successfully." });
    } catch (error) {
      return errorCatch(req,res,error);
    }
  };

  
}




