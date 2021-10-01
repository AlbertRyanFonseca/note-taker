const path = require('path');
const fs = require('fs');

function retrieveNotes() {
    let noteData = fs.readFileSync('./db/db.json');
    let note = JSON.parse(noteData);
    for (let i = 0; i < note.length; i++) {
        note[i].id = "" + i;
    }

    return note;
}

module.exports = (app) => {
    app.get("/api/notes", (req, res) => {
        noteInfo = retrieveNotes();
        res.json(noteInfo);
        noteInfo.push(req.body);
        res.json(true);
    });

    app.post("/api/notes", (req, res) => {
        noteInfo.push(req.body);
        fs.writeFileSync("./db/db.json", JSON.stringify(noteInfo));
        res.json(true);
    })

};