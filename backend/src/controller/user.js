const User = require("../models/user");

exports.signup = (req, res) => {
  User.findOne({ email: req.body.email }).exec((error, _user) => {
    if (_user) return res.status(400).json({ message: "email already exists" });

    const { firstName, lastName, email, password } = req.body;
    const user = new User({
      firstName,
      lastName,
      email,
      password,
      userName: Math.random().toString(),
    });

    user.save((error, data) => {
      if (error) {
        return res.status(400).json({ message: "something went wrong" });
      }
      if (data) {
        return res.status(201).json({
          messagw: "user created success",
        });
      }
    });
  });
};
