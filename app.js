require("dotenv").config()
const express = require("express")
const expressLayout = require("express-ejs-layouts")
const app = express()
const port = 3000 || process.env.PORT

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

app.use(express.static("public"))
app.use(expressLayout)
app.set("layout", "./layouts/main")
app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("index")
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})