const homepage = (req, res) => {
    const locals = {
        "title": "Notes Website",
        "description": "Free write notes"
    }
    res.render("index", {
        locals,
        layout: "../views/layouts/front-page"
    })
}

const about = (req, res) => {
    const locals = {
        "title": "Notes Website",
        "description": "Free write notes"
    }
    res.render("about", locals)
}

module.exports = {
    homepage,
    about
}