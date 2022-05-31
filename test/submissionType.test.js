const mongoose = require("mongoose");
const submissionType = require("../Model/submissionType");



  test("create submissionType without required field should failed", async () => {
    const adminWithoutRequiredField = new submissionType({ subType: "subType Testing",description:"description testing" });
    let err;
    try {
      const savedAdminWithoutRequiredField =
        await adminWithoutRequiredField.save();
      error = savedAdminWithoutRequiredField;
    } catch (error) {
      err = error;
    }
    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(err.errors.deadline).toBeDefined();
  });

