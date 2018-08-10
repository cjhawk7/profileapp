const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  handle: { type: String, required: true, max: 40 },
  location: { type: String },
  status: { type: String, required: true },
  bio: { type: String },
  skills: { type: String }
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
