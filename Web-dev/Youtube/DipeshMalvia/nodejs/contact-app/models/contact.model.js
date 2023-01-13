const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a valid name"],
    },
    email: {
      type: String,
      required: [true, "Please provide a valid email"],
    },
    mobile: {
      type: String,
      required: [true, "Please provide a valid mobile number"],
    },
  },
  { timestamps: true }
);

const contactModel = mongoose.model("Contact", contactSchema);

module.exports = contactModel;
