require("dotenv").config()
const express = require("express")
const expressLayout = require("express-ejs-layouts")
const methodOverride = require("method-override")
const connectDB = require("./servers/config/db")
const session = require('express-session')
const passport = require('passport')
const MongoStore = require('connect-mongo')
const authRoute = require('./servers/routes/auth')
const mainRoute = require("./servers/routes/index")
const dashboardRoute = require("./servers/routes/dashboard")
const app = express()
const path = require("path")
const port = 3000 || process.env.PORT

app.use(session({
    secret: "Keyboard cat",
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl: process.env.MONGODB_URI
    }),
    cookie: {
        maxAge: new Date(Date.now() + (7 * 24 * 60 * 60 * 1000))
    }
}))

app.use(passport.initialize())
app.use(passport.session())

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

app.use(methodOverride("_method"))

// Connect to Database
connectDB()

app.use(express.static(__dirname + "/public"))
app.use(expressLayout)
app.set("views", path.join(__dirname, "views"));
app.set("layout", "./layouts/main")
app.set("view engine", "ejs")

app.use("/", mainRoute)
app.use("/", authRoute)
app.use("/dashboard", dashboardRoute)
app.use("/ping", (req, res) => {
    res.send("Pong!")
})

// Handle 404
app.get("*", (req, res) => {
    // res.status(404).send("404 Page Not Found.")
    res.status(404).render("404")
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})