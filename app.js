const chalk = require('chalk');

const yargs = require('yargs');

const notesActions = require('./notes');

yargs.command({
    command: 'add',
    describe: 'trying to add',
    builder:{
        body:{
            describe: "body value",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notesActions.addNotes(argv.title,argv.body);
    }
})

yargs.command({
    command: 'remove',
    describe: 'trying to remove',
    builder:{
        title:{
            describe: "title of the note",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notesActions.removeNotes(argv.title);
    }
})

yargs.command({
    command: 'list',
    describe: 'listing notes',
    handler: function() {
        console.log(chalk.green.inverse("notes list!"));
        notesActions.listNotes();
    }
})

yargs.command({
    command: 'read',
    describe: 'reading note',
    builder: {
        title: {
            describe: "note title",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notesActions.readNote(argv.title);
    }
})

yargs.parse();

// console.log(yargs.argv);

// console.log(chalk.green.inverse("success"));



// const getNotes = require("./notes");

// const note = getNotes();

// console.log(note);



// const add = require('./utils.js');

// const sum = add(10, -2);

// console.log(sum)