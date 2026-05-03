import { errorCatch } from "../../shared/index.js";
import Project from "./schema/projects.schema.js";

const model = Project;

export default class ProjectController {
  static async getList(req, res) {
    /*try {
      const { search, limit, page } = req.query;

      //const { data, totalelement, totalPages, currentPage, pageLimit } =
        //await paginatorsSearched(model, page, limit, search);

      res.status(200).json({
        users: data,
        totalProject: totalelement,
        totalPages,
        currentPage,
        pageLimit,
      });
    } catch (error) {
      return errorCatch(error, res);
    }*/
  }

  static async createOne(req, res) {
    try {
      const { project } = req.body;
      await new model(project).save();
      res.status(200).json({ message: "Project saved successfully." });
    } catch (error) {
      return errorCatch(error, res);
    }
  }

  static async readOne(req, res) {
    try {
      const user = await model.findById(req.params.id);
      if (!user) throw new Error({ message: "Project not found !" });
      res.status(200).json(user);
    } catch (error) {
      return errorCatch(error, res);
    }
  }

  static async updateOne(req, res) {
    try {
      const { project } = req.body;
       await model.findByIdAndUpdate(req.params.id, project);
      res.status(200).json({ message: "Project updated successfully." });
    } catch (error) {
      return errorCatch(error, res);
    }
  }

  static async deleteOne(req, res) {
    try {
      await model.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: "Project deleted successfully." });
    } catch (error) {
      return errorCatch(error, res);
    }
  }
}
