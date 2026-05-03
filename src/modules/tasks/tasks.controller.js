import Tasks from "./tasks.schema.js";
import { errorCatch } from "../../shared/index.js";
const model = Tasks;

export default class TasksController {
  static async getList(req, res) {
    /*try {
      const { search, limit, page } = req.query;

      //const { data, totalelement, totalPages, currentPage, pageLimit } =
        //await paginatorsSearched(model, page, limit, search);

      res.status(200).json({
        tasks: data,
        totalTasks: totalelement,
        totalPages,
        currentPage,
        pageLimit,
      });
    } catch (error) {
      console.log(error);
      return errorCatch(req,res,error);
    }*/
  }

  static async createOne(req, res) {
    try {
      const { task } = req.body;
      await new model(task).save();
      res.status(200).json({ message: "Task saved successfully." });
    } catch (error) {
      return errorCatch(req,res,error);
    }
  }

  static async readOne(req, res) {
    try {
      const task = await model.findById(req.params.id);
      res.status(200).json(task);
    } catch (error) {
      return errorCatch(req,res,error);
    }
  }

  static async updateOne(req, res) {
    try {
      const { task } = req.body;
      await model.findByIdAndUpdate(req.params.id, task);
      res.status(200).json({ message: "Task updeted successfully." });
    } catch (error) {
      return errorCatch(req,res,error);
    }
  }

  static async deleteOne(req, res) {
    try {
      await model.deleteOne({_id : req.params.id});
      res.status(200).json({ message: "Task deleted successfully." });
    } catch (error) {
      return errorCatch(req,res,error);
    }
  }

  static async completed(req, res) {
    try {
      await model.updateOne(
        {_id : req.params.id},
        { completed: true, completedAt: Date.now() },
        { new: true }
      );
      res.status(200).json({ message: "Task complited successfully" });
    } catch (error) {
      return errorCatch(req,res,error);
    }
  }
}
