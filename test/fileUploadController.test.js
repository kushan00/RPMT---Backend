const mongoose = require("mongoose");
const File = require('../Model/fileUpload');



  test("create File without required field should failed", async () => {
    const adminWithoutRequiredField = new File({ topic: "topic Testing",description:"description testing" });
    let err;
    try {
      const savedAdminWithoutRequiredField =
        await adminWithoutRequiredField.save();
      error = savedAdminWithoutRequiredField;
    } catch (error) {
      err = error;
    }
    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(err.errors.file).toBeDefined();
  });

