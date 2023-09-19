const express = require("express")
const mainController = require("../controllers/mainController")
const router = express.Router()

router.get("/", mainController.homepage)
router.get("/about", mainController.about)

module.exports = router