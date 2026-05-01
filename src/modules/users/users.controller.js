import Users from "./user.schema.js"
import { errorCatch  } from "../../shared/index.js";

const model = Users 

export default class UsersController{
  static async getList(req, res) {
    try {
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
    }
  }

  static async createOne (req, res)   {
    try {
      const { user } = req.body;
      if(!user.first_name || !user.last_name || !user.email || !user.phone) throw new Error("All fields are required !");
      await new model(user).save();
      res.status(200).json({ message: "User saved successfully." });
    } catch (error) {
      return errorCatch(req,res,error);
    }
  };
  
 
  
  static async readOne (req, res)   {
    try {
      const user = await model.findById(req.params.id);
      if (!user) throw new Error({ message: "user not found !" });
      res.status(200).json(user);
    } catch (error) {
      return errorCatch(req,res,error);
    }
  };
  
  static async updateOne (req, res)   {
    try {
      const { user } = req.body;
      const updateduser = await model.findByIdAndUpdate(req.params.id, user, {
        new: true,
      });
      if (!updateduser) throw new Error("user not found !");
      res.status(200).json({ message: "user updeted successfully." });
    } catch (error) {
      return errorCatch(req,res,error);
    }
  };
  
  static async deleteOne (req, res)   {
    try {
      const user = await model.findByIdAndDelete(req.params.id);
      if (!user) throw new Error("user not found !");
      res.status(200).json({ message: "user deleted successfully." });
    } catch (error) {
      return errorCatch(req,res,error);
    }
  };
  
  

}
