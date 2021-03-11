// const notesData = require('../db/db.json');
const Storage = require('../db/db');
const store = new Storage;

module.exports = (app) => {

   //GET /api/notes reads ../db/db.json and returns all saved notes as JSON
   app.get('/api/notes', (req, res) => {
      const notes = store.getNotes();

      if (!notes) {
         res.statusCode(500);
      }
      return res.json(notes);
   });   
   
   //POST /api/notes receives a new note on the request body, adds to db.json, and returns the new note to the client
   //Each note should be given a UID -- npm package that can do this
   app.post('/api/notes', (req, res) => {
      const newNote = store.postNote(req.body);
      return res.json(newNote);
   })
      
   //BONUS
   //Try doing DELETE /api/notes/:id to delete a note. Read notes from db.json, match given ID, remove corresponding note, refresh list
   app.delete('/api/notes/:id', (req, res) => {
      const retained = store.deleteNote(req.params.id);
      return res.json(retained);
   })

}