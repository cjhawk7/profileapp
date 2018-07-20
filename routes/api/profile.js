const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Profile = require("../../models/Profile");
const User = require("../../models/User");

router.get("/test", (req, res) => res.json({ msg: "Profiles working" }));

//get current users profile
//not working in postman - check S4/L18
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};

    Profile.findOne({ user: req.user.id })
      .then(profile => {
        if (!profile) {
          errors.noprofile = "There is no profile for this user";
          return res.status(404).json();
        }
        res.json(profile);
      })
      .catch(err => res.status(404).json(err));
  }
);
//create user profile
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    //get fields
    const profileFields = {};
    profileFields.user = req.user.id;

    const standardields = [
      "handle",
      "company",
      "location",
      "bio",
      "status",
      "githubUsername"
    ];
    socialFields = ["youtube", "twitter", "facebook", "linkedin", "instagram"];
    standardFields.forEach(field => {
      if (req.body[field]) profileFields[field] = req.body[field];
    });

    profileFields.social = {};

    socialFields.forEach(field => {
      if (req.body[field]) profileFields.social[field] = req.body[field];
    });
    // Skills - Spilt into array
    if (typeof req.body.skills !== "undefined") {
      profileFields.skills = req.body.skills.split(",");
    }
    Profile.findOne({ user: req.user.id }).then(profile => {
      if (profile) {
        Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        ).then(profile => res.json(profile));
      } else {
        //check if handle exists
        Profile.findOne({ handle: profileField.handle }).then(profile => {
          if (profile) {
            errors.handle = "That handle already exists";
            res.status(400).json(errors);
          }
          //save profile
          new Profile(profileFields).save().then(profile => res.json(profile));
        });
      }
    });
  }
);

module.exports = router;
