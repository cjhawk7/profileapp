const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  handle: { type: String, required: true, max: 40 },
  //replace company and website with fields relative to app
  company: { type: String },
  website: { type: String },
  location: { type: String },
  //optional...change as needed
  status: { type: String, required: true },
  //change skills to hobbies or interests?
  skills: { type: [String], required: true },
  bio: { type: String },
  //using API to get data from github
  //probably won't want this...implement another api?
  githubusername: { type: String },
  //potentially all irrelevant...change as needed
  experience: [
    {
      title: { type: String, required: true },
      company: { type: String, required: true },
      location: { type: String, required: true },
      from: { type: Date, required: true },
      to: { type: Date },
      current: { type: Boolean, default: false },
      description: { type: String }
    }
  ],
  //potentially all irrelevant...change as needed
  education: [
    {
      school: { type: String, required: true },
      degree: { type: String, required: true },
      fieldofstudy: { type: String, required: true },
      from: { type: Date, required: true },
      to: { type: Date },
      current: { type: Boolean, default: false },
      description: { type: String }
    }
  ],
  //potentially all irrelevant...change as needed
  social: {
    youtube: { type: String },
    twitter: { type: String },
    facebook: { type: String },
    linkedin: { type: String },
    instagram: { type: String }
  },
  date: {
    youtube: { type: Date, default: Date.now }
  }
});

module.exports = Profile = mongoose.model("profile, ProfileSchema");
