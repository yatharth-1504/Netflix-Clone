const express = require("express");
const router = express.Router();

const authController = require("../controllers/user_controller");
const { verify_jwt } = require("../middlewares/auth_middleware");

router.post("/create", verify_jwt, authController.create);
router.post("/login", verify_jwt, authController.login);
router.get("/getme", verify_jwt, authController.getMe);
router.get("/getall", verify_jwt, authController.getAll);
router.post("/update", verify_jwt, authController.update);
router.post("/delete", verify_jwt, authController.delete);

module.exports = router;
