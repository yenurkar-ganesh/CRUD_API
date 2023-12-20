const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, `Please add the Contact Name `],
    },
    email: {
      type: String,
      required: [true, `Please add the Contact mail `],
    },
    phone: {
      type: String,
      required: [true, `Please add the Contact Number `],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Contact', contactSchema)
