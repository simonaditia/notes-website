const express = require("express")
const router = express.Router()
const isLoggedIn = require("../middleware/checkAuth")
const dashboardController = require("../controllers/dashboardController")

router.get("/", isLoggedIn, dashboardController.dashboard)
router.get("/item/:id", isLoggedIn, dashboardController.dashboardViewNote)
router.put("/item/:id", isLoggedIn, dashboardController.dashboardUpdateNote)
router.delete("/item-delete/:id", isLoggedIn, dashboardController.dashboardDeleteNote)

module.exports = router