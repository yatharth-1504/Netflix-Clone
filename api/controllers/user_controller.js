const User = require("../models/user");
const crypto = require("crypto-js");

// create a user, only admins should access
module.exports.create = async (req, res) => {
  await User.create({
    email: req.body.email,
    password: crypto.AES.encrypt(
      req.body.password,
      process.env.SECRET_KEY
    ).toString(),
    username: req.body.username,
  })
    .save()
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

// login
module.exports.login = async (req, res) => {
  await User.findOne({ email: req.body.email })
    .then((user) => {
      const passwordIsValid =
        req.body.password ==
        crypto.AES.decrypt(user.password).toString(crypto.enc.Utf8);
      if (passwordIsValid) return res.status(401).send("Invalid Credentials");
      const accessToken = jwt.sign(
        { id: user._id, is_admin: user.is_admin },
        process.env.SECRET_KEY,
        { expiresIn: "5d" }
      );
      return res.status(200).json({ status: true, accessToken: accessToken });
    })
    .catch((err) => {
      return res.status(500).send(err);
    });
};

// update a user
module.exports.update = async (req, res) => {
  await User.findOne({ _id: req.decoded.id })
    .then(async (user) => {
      if (req.body.password) user.password = req.body.password;
      if (req.body.username) user.username = req.body.username;
      if (req.body.profile_pic) user.profile_pic = req.body.profile_pic;
      const userUpdated = await user.save();
      return res.status(200).json({ status: "Updated", user: userUpdated });
    })
    .catch((e) => res.status(500).send(err));
};

// getMe
module.exports.getMe = async (req, res) => {
  await User.findOne({ _id: req.decoded.id })
    .then((user) => res.status(200).json({ user }))
    .catch((e) => res.status(500).send(err));
};

// getAll
module.exports.getAll = async (req, res) => {
  if (req.decoded.is_admin) {
    const users = await User.find();
    return res.status(200).json({ users: users });
  } else {
    return res.status(401).send("Unauthorised");
  }
};

// delete a user
module.exports.delete = async (req, res) => {
  await User.findByIdAndDelete({ id: req.decoded.id }, (err, userDeleted) => {
    if (err) return res.status(500).send(err);
    return res.status(200).json({ status: "Deleted", user: userDeleted });
  });
};

// get month wise stats
module.exports.getStats = async (req, res) => {
  try {
    const monthsarray = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const data = await User.aggregate([
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
};

// using js
module.exports._getStats = async (req, res) => {
  try {
    const users = await User.find();
    if (!req.decoded.is_admin) {
      res.status(500).send("Unauthorised!");
    }
    const data = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
      9: 0,
      10: 0,
      11: 0,
      12: 0,
    };
    users.map((user) => {
      data[user.createdAt.getMonth() + 1]++;
    });
    return res.status(200).json({ data });
  } catch (e) {
    return res.status(500).send(e);
  }
};
