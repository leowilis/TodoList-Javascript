const prompt = require('prompt-sync')({ sigint: true });

let todos = [];

// Implementation of a function to generate a unique ID
function generateUniqueId() {
  const timestamp = Date.now().toString();
  const random = Math.random().toString(36).substring(2, 9);
  return timestamp + random;
}

// Implementation of logic for adding new to-do
function addTodo() {
  let text = prompt('Enter the to-do text: ');
  if (!text || text.trim() === '') {
    console.log('Error: To-do text cannot be empty.');
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

// Implementation of logic to mark to-do as completed
function markTodoCompleted() {
  listTodos();
  if (todos.length === 0) {
    return;
  }
  const input = prompt('Enter the number of the to-do to mark as completed: ');
  const todoNumber = parseInt(input);

  if (isNaN(todoNumber) || todoNumber < 1 || todoNumber > todos.length) {
    console.log('Invalid number. Please enter a valid number from the list.');
    return;
  }

  selectedTodo.isCompleted = true;
  console.log(`To-do "${selectedTodo.text}" marked as completed.`);
}

// Implementation of logic to delete to-do
function deleteTodo() {
  listTodos();
  if (todos.length === 0) {
    return;
  }
  const input = prompt('Enter the number of the to-do to delete: ');
  const todoNumber = parseInt(input);

  if (isNaN(todoNumber) || todoNumber < 1 || todoNumber > todos.length) {
    console.log('Invalid number. Please enter a valid number from the list.');
    return;
  }
  const todoIndex = todoNumber - 1;
  const selectedTodo = todos[todoIndex];
  todos.splice(todoIndex, 1);
  console.log(`To-do "${selectedTodo.text}" deleted.`);
}

// Implementation of logic to display all to-dos
function listTodos() {
  console.log('\n--- YOUR TO-DO LIST ---');
  if (todos.length === 0) {
    console.log('No to-dos to display.');
    return;
  }
  todos.forEach((todo, index) => {
    const status = todo.isCompleted ? '[DONE]' : '[ACTIVE]';
    console.log(`${index + 1}. ${status} | ${todo.text}`);
  });
  console.log('');
}
