# todo-cli

Moved here from [js-todo-cli](https://github.com/abhinaba-chanda/js-todo-cli).

A tiny to-do list for the terminal, written in plain Node.js (no dependencies).

## Usage

```bash
cd todo-cli
node todo.js add "Finish DSA sheet"
node todo.js list
node todo.js done 1
node todo.js remove 1
node todo.js clear
```

Tasks are saved in `todos.json` next to the script.

## Tests

Run from the repo root (Node's test runner picks up these tests too):

```bash
npm test
```
