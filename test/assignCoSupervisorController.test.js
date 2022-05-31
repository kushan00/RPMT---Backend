const mongoose = require("mongoose");
const assignCoSupersivor = require("../Model/assignCoSupersivor");



  test("create assignCoSupersivor without required field should failed", async () => {
    const adminWithoutRequiredField = new assignCoSupersivor({ co_supervisor_id: "co_supervisor_id Testing",leader_itnum:"leader_itnum testing" });
    let err;
    try {
      const savedAdminWithoutRequiredField =
        await adminWithoutRequiredField.save();
      error = savedAdminWithoutRequiredField;
    } catch (error) {
      err = error;
    }
    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(err.errors.group_regnum).toBeDefined();
  });

