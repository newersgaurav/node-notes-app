const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
    try{
        const notesBuffer = fs.readFileSync('notes.json');
        const notesJSON = notesBuffer.toString();
        return JSON.parse(notesJSON);
    } catch(e){
        return [];
    }     
}

const addNotes = (title,body) => {
    const notes = getNotes();
    const duplicateNote = notes.find((note) => {
        return note.title === title;
    })

    if( !duplicateNote ){
        notes.push({
            title,
            body,
        });
        saveNotes(notes);
        console.log(chalk.green.inverse("new note added!"));
    } else{
        console.log(chalk.red.inverse("cannot add the note..."));
        console.log(chalk.red.inverse("the notes title is already exist!"));
    }
}

const removeNotes = (title) => {
    notes = getNotes();
    newNotes = notes.filter( (note) => {
        return note.title !== title;
    });
    if(notes.length === newNotes.length){
        console.log(chalk.red.inverse("Do not have the note!"));
    } else {
        saveNotes(newNotes);
        console.log(chalk.green.inverse("note successfully removed!"));
    }
}

const listNotes = () => {
    const notes = getNotes();
    if( notes.length > 0 ){
        notes.forEach( note => {
            console.log(chalk.blue.inverse(note.title));
            console.log(chalk.red.inverse(note.body));
        });
    } else {
        console.log(chalk.red.inverse("Notes List Is Empty!"));
    }
}

const readNote = (title) => {
    const notes = getNotes();
    const noteRead = notes.find( (note) => {
        return note.title === title;
    });
    if(noteRead){
        console.log(chalk.green.inverse(noteRead.title));
        console.log(noteRead.body);
    } else {
        console.log(chalk.red.inverse("note not found!"));
    }
}

const saveNotes = (notes) => {
    const notesJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json',notesJSON);
}

module.exports = {
    getNotes,
    addNotes,
    removeNotes,
    listNotes,
    readNote,
};