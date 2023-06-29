const express = require("express");
const router = express.Router();

const movieController = require("../controllers/movie_controller");
const { verify_jwt } = require("../middlewares/auth_middleware");

router.post("/create", verify_jwt, movieController.add_movie);
router.get("/findbyid/:id", verify_jwt, movieController.get_movie);
router.get("/findrandom", verify_jwt, movieController.get_random_movie);
router.post("/update/:id", verify_jwt, movieController.update_movie);
router.post("/delete/:id", verify_jwt, movieController.delete_movie);

module.exports = router;
