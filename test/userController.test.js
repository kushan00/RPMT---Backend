const mongoose = require("mongoose");
const User = require("../Model/user");


  test("create User without required field should failed", async () => {
    const adminWithoutRequiredField = new User({ name: "Name testing",password:"testing@gmail.com" });
    let err;
    try {
      const savedAdminWithoutRequiredField =
        await adminWithoutRequiredField.save();
      error = savedAdminWithoutRequiredField;
    } catch (error) {
      err = error;
    }
    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(err.errors.email).toBeDefined();
  });

