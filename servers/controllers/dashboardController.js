const dashboard = (req, res) => {
    const locals = {
        title: "Dashboard",
        description: "Free write notes"
    }
    res.render("dashboard/index", {
        locals,
        layout: "../views/layouts/dashboard"
    })
}

module.exports = {
    dashboard
}