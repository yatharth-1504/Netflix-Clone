const Movie = require("../models/movie");

// add a movie
module.exports.add_movie = async (req, res) => {
  if (req.decoded.is_admin) {
    const movieCreated = await Movie.create(req.body).save();
    return res.status(200).json({ movie: movieCreated });
  } else {
    res.status(500).send("Unauthorised");
  }
};

// update a movie
module.exports.update_movie = async (req, res) => {
  try {
    if (req.decoded.is_admin) {
      const movieUpdated = await Movie.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      return res.status(200).json({ movie: movieUpdated });
    } else {
      res.status(500).send("Unauthorised");
    }
  } catch (e) {
    res.status(401).send("Error Occured!");
  }
};

// get a movie by id
module.exports.get_movie = async (req, res) => {
  try {
    const movie = await Movie.findOne({ _id: req.params.id });
    return res.status(200).json({ movie });
  } catch (e) {
    res.status(401).send("Error Occured!");
  }
};

// get a random movie
module.exports.get_random_movie = async (req, res) => {
  try {
    const movies = await Movie.find({ is_series: req.query.is_series });
    return res
      .status(200)
      .json({ movie: movies[Math.floor(Math.random() * movies.length)] });
  } catch (e) {
    res.status(401).send("Error Occured!");
  }
};

// delete a movie
module.exports.delete_movie = async (req, res) => {
  try {
    if (!req.decoded.is_admin) {
      return re.status(500).send("Unauthorised");
    }
    await Movie.findByIdAndDelete(req.params.id, (err, movieDeleted) => {
      if (err) {
        return res.status(500).send(err);
      }
      return res.status(200).json({ movie: movieDeleted });
    });
  } catch (e) {
    res.status(401).send("Error Occured!");
  }
};
