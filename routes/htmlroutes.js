const path = require("path");

module.exports = function(app) {
    
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/index.html"));
    });
    
    app.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/notes.html"));
    });

    app.get('/api/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../db/db.json'));
    });
}