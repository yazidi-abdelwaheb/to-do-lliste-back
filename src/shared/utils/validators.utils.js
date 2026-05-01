


/**

* Creates a custom validator to check if an ID exists in the database.

* @param {mongoose.Model} model - The Mongoose model to check.

* @param {string} idField - The name of the field containing the ID (default "id").

* @param {string} fieldName - The name of the field used in error messages.

* @param {"param"|"body"} In - Specifies whether the ID is in the parameters ("param") or in the body ("body").

* @returns {Array} - An array of express-validators.

*/
export const customValidatorId = (
  model,
  idField = "id",
  fieldName = "Item",
  In = "param"
) => {
  // Select the correct function based on location
  const validator = In === "param" ? param(idField) : body(idField);

  return [
    validator
      .isMongoId()
      .withMessage(`Invalid ${fieldName} ID.`)
      .bail() // stop validation if ID is not a MongoID
      .custom(async (value) => {
        const item = await model.findById(value);
        if (!item) {
          throw new Error(`${fieldName} not found!`);
        }
        return true;
      }),
  ];
};