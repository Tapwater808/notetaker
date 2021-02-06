const fs = require('fs');
const path = require('path');
const generateUniqueId = require('generate-unique-id');


require('./htmlroutes.js');

module.exports = app => {

    fs.readFile('db/db.json', 'utf8', (err, data) => {
        if (err) throw err;
     
        let notes = JSON.parse(data);

        app.get('/api/notes', function (req, res) {
            res.json(notes);
        })
        app.post('/api/notes', function (req, res) {

            const newNote = {
                title: req.body.title,
                text: req.body.text,
                id: generateUniqueId({
                    length: 10,
                    useLetters: true,
                    useNumbers: true
                })
            };
            notes.push(newNote);
            updateNotesData(notes);
            res.json(notes);
            return console.log(`A new note has been added: ${newNote.title}`);
        })
        // get note with unique ids
        app.get('/api/notes/:id', function (req, res) {
            res.json(notes[req.params.id]);
        })
        // delete a note with unique
        app.delete('/api/notes/:id', function (req, res) {
            notes.splice(req.params.id, 1);
            updateNotesData(notes);
            res.json(notes);
            console.log(`Note with ID of ${req.params.id} has been deleted.`);
        })

    })

// update json file
function updateNotesData(notes) {
    fs.writeFile('db/db.json', JSON.stringify(notes,'\t'), err => {
        if (err) throw err;
        return true;
    })
};

};