const mongoose = require("mongoose");
const assignSupervisor = require("../Model/assignSupervisor");



  test("create assignSupervisor without required field should failed", async () => {
    const adminWithoutRequiredField = new assignSupervisor({ supervisor_id: "supervisor_id Testing",leader_itnum:"leader_itnum testing" });
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

