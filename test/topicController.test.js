const mongoose = require("mongoose");
const Topic = require("../Model/topic");



  test("create Topic without required field should failed", async () => {
    const adminWithoutRequiredField = new Topic({ GroupNo: "Group No Testing",Topic:"Topic testing" });
    let err;
    try {
      const savedAdminWithoutRequiredField =
        await adminWithoutRequiredField.save();
      error = savedAdminWithoutRequiredField;
    } catch (error) {
      err = error;
    }
    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(err.errors.Description).toBeDefined();
  });

