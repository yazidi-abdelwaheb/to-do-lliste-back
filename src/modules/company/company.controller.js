import { errorCatch } from "../../shared/index.js";
import Company from "./schema/company.schema.js";

const model = Company 

export default class CompanyController{
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
      const { company } = req.body;
      await new model(company).save();
      res.status(200).json({ message: "Company saved successfully." });
    } catch (error) {
      return errorCatch(req,res,error);
    }
  };
  
 
  
  static async readOne (req, res)   {
    try {
      const company = await model.findById(req.params.id);
      res.status(200).json(company);
    } catch (error) {
      return errorCatch(req,res,error);
    }
  };
  
  static async updateOne (req, res)   {
    try {
      const { company } = req.body;
      await model.findByIdAndUpdate(req.params.id, company);
      res.status(200).json({ message: "Company updated successfully." });
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




