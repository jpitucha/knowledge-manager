const inquirer = require("inquirer");
const KnowledgeManager = require("./knowledgeManager");
const Note = require("./note");

const kb = new KnowledgeManager();

async function main() {
  while (1) {
    const { action } = await inquirer.prompt([
      {
        type: "list",
        name: "action",
        message: "Choose action",
        choices: [
          { name: "list all notes" },
          { name: "add note" },
          { name: "edit note" },
          { name: "delete note" },
          { name: "search for note" },
        ],
      },
    ]);

    switch (action) {
      case "list all notes":
        handleListAllNotes();
        break;
      case "add note":
        await handleAddNote();
        break;
      case "edit note":
        await handleEditNote();
        break;
      case "delete note":
        await handleDeleteNote();
        break;
      case "search for note":
        await handleSearchForNote();
        break;
    }
  }
}

function handleListAllNotes() {
  const result = kb.getAll();
  console.log(result);
}

async function handleAddNote() {
  const { title, content } = await inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "Type the note title",
    },
    {
      type: "input",
      name: "content",
      message: "Type the note content",
    }
  ]);
  kb.add(new Note(title, content));
}

async function handleEditNote() {
  const { existingTitle } = await inquirer.prompt([
    {
      type: "input",
      name: "existingTitle",
      message: "Type note title You want edit"
    }
  ]);
  const { title, content } = await inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "Type the note title",
    },
    {
      type: "input",
      name: "content",
      message: "Type the note content",
    }
  ]);
  kb.update(existingTitle, new Note(title, content))
}

async function handleDeleteNote() {
  const { title } = await inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "Type note title You want delete"
    }
  ]);
  kb.delete(title);
}

async function handleSearchForNote() {
  const { title } = await inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "Type the note title",
    },
  ]);
  const result = kb.search(title);
  console.log(result);
}

main();
