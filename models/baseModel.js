const mongoose = require("mongoose");

const BaseSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("BaseModel", BaseSchema);
