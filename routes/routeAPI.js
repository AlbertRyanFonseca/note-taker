const path = require('path');
const fs = require('fs');

function retrieveNotes() {
    let noteData = fs.readFileSync('./db/db.json');
    let note = JSON.parse(noteData);

    return note;
}