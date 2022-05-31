const mongoose = require("mongoose");
const GroupPanel = require("../Model/GroupPanel");


  test("create GroupPanel without required field should failed", async () => {
    const adminWithoutRequiredField = new GroupPanel({ GroupNo: "GroupNo testing",GroupID:"Testing GroupID" });
    let err;
    try {
      const savedAdminWithoutRequiredField =
        await adminWithoutRequiredField.save();
      error = savedAdminWithoutRequiredField;
    } catch (error) {
      err = error;
    }
    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(err.errors.PanelMember1ID).toBeDefined();
  });

