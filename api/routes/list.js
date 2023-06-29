const express = require("express");
const router = express.Router();

const listController = require("../controllers/list_controller");
const { verify_jwt } = require("../middlewares/auth_middleware");

router.post("/create", verify_jwt, listController.add_list);
router.get("/getlists", verify_jwt, listController.get_lists);
router.post("/delete/:id", verify_jwt, listController.delete_list);

module.exports = router;
