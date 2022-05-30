const mongoose = require("mongoose");
const GroupRegister = require("../Model/user");
// const GroupRegisterData = {    name:"Name",mobileno:"0775902679", email:"email@email.com",ITnumber:"it21345455 ", password:"gmail.com", userRole:"student" };

describe("Admin Model Test", () => {
  beforeAll(async () => {
    process.env.DB_URL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      (err) => {
        if (err) {
          console.error(err);
          process.exit(1);
        }
      };
  });

  it("create admin without required field should failed", async () => {
    const adminWithoutRequiredField = new GroupRegister({ name: "Name",password:"gmail.com" });
    let err;
    try {
      const savedAdminWithoutRequiredField =
        await adminWithoutRequiredField.save();
      error = savedAdminWithoutRequiredField;
    } catch (error) {
      err = error;
    }
    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(err.errors.password).toBeDefined();
  });
});
