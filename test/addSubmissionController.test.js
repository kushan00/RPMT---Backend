const mongoose = require("mongoose");
const AddSUbmission = require('../Model/addSubmissions');



  test("create AddSUbmission without required field should failed", async () => {
    const adminWithoutRequiredField = new AddSUbmission({ groupNo: "groupNo Testing",itNo:"itNo testing" });
    let err;
    try {
      const savedAdminWithoutRequiredField =
        await adminWithoutRequiredField.save();
      error = savedAdminWithoutRequiredField;
    } catch (error) {
      err = error;
    }
    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(err.errors.topic).toBeDefined();
  });

