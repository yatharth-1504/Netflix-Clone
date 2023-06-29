const express = require("express");
const router = express.Router();
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);

router.use("/auth", require("./auth"));
router.use("/movie", require("./movie"));
router.use("/list", require("./list"));

module.exports = app;
