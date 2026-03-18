const prompt = require("prompt-sync")({ sigint: true });

let todos = [];

// Implementation of a function to generate a unique ID
function generateUniqueId() {
    const timestamp = Date.now().toString();
    const random = Math.random().toString(36).substring(2, 9);
    return timestamp + random;
}

// Implementation of logic for adding new to-do
function addTodo() {
    let text = prompt("Enter the to-do text: ");
    if (!text || text.trim() === "") {
        console.log("Error: To-do text cannot be empty.");
        return;
    }
    let newTodo = {
        id: generateUniqueId(),
        text: text.trim(),
        isCompleted: false,
    };
    todos.push(newTodo);

    console.log(`To-do "${newTodo.text}" added successfully.`);
}