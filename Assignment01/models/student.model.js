const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema(
  {
    schoolId: {
      type: Number,
      required: true,
      unique: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    dob: {
      type: String,
      required: true,
    },
    addressUnit: String,
    addressStreet: String,
    addressCity: String,
    addressStateProv: String,
    addressCountry: String,
    addressPostCode: String,
    phone: String,
    email: {
      type: String,
      required: true,
      unique: true,
    },
    emergContactName: String,
    emergContactPhone: String,
    emergContactRel: String,
    program: String,
  },
  { timestamps: true }
);

const Student = mongoose.model("Student", StudentSchema);

module.exports = Student;
