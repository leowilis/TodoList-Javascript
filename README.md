# ✅ Todo List App

A simple interactive command-line Todo List application built with JavaScript and Node.js. Manage your daily tasks directly from the terminal.

## 🚀 Features

- Add new to-dos
- View all to-dos with status
- Mark to-dos as completed
- Delete to-dos
- Interactive CLI menu

## 🛠️ Tech Stack

- JavaScript
- Node.js
- prompt-sync

## 📁 Project Structure
```
TodoList-Javascript/
  index.js        # Core application logic
  package.json    # Project configuration
  .gitignore
```

## ⚙️ Installation
```bash
npm install
```

## ▶️ Running the App
```bash
node index.js
```

## 📖 Usage

Once the app is running, use these commands:
```
=== WELCOME TO YOUR TO-DO LIST APP ===

Commands:
1. add      - Add a new to-do
2. list     - View all to-dos
3. complete - Mark a to-do as completed
4. delete   - Delete a to-do
5. exit     - Exit the app
```

## 📝 Example
```
Enter a command: add
Enter the to-do text: Buy groceries
To-do "Buy groceries" added successfully.

Enter a command: list

--- YOUR TO-DO LIST ---
1. [ACTIVE] | Buy groceries

Enter a command: complete
1. [ACTIVE] | Buy groceries
Enter the number of the to-do to mark as completed: 1
To-do "Buy groceries" marked as completed.
```

## 📄 License

MIT
