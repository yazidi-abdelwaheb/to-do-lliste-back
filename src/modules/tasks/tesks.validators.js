import { TASK_PRIORATE_ENUM, TASK_STATUS_ENUM  } from "../../shared/enums";
import { customValidatorId } from "../../shared/utils";
import Tasks from "./tasks.schema";
import { body } from "express-validator";

const taskValidator = [
  body("task.title")
    .isLength({ min: 5, max: 50 })
    .withMessage("Title must be between 5 and 50 characters.")
    .notEmpty()
    .withMessage("Title is required."),
  body("task.description")
    .isLength({ max: 1500 })
    .withMessage("Description can be up to 1500 characters."),
  body("task.status")
    .isIn(TASK_STATUS_ENUM)
    .withMessage("Status must be one of: pending, in-progress, completed, cancelled."),
  body("task.priority")
    .isIn(TASK_PRIORATE_ENUM)
    .withMessage("Priority must be one of: low, medium, high, urgent."),

]


const createValidator = [
  ...taskValidator,
];
const updateValidator = [
  ...customValidatorId(Tasks, "id", "Task"),
 ...taskValidator,
];
const deleteValidator = [...customValidatorId(Tasks, "id", "Task")];
const readValidator = [...customValidatorId(Tasks, "id", "Task")];

const completeValidator = [...customValidatorId(Tasks, "id", "Task")];


export {
  createValidator,
  updateValidator,
  deleteValidator,
  readValidator,
  completeValidator,
};
