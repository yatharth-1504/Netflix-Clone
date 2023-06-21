const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: { type: "string", required: true },
    email: { type: "string", required: true },
    password: { type: "string", required: true },
    profile_pic: { type: "string" },
    is_admin: { type: "boolean", defalut: false },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
