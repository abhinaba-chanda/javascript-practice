#!/usr/bin/env node
// Simple to-do list for the terminal. Tasks are saved in todos.json.
// Usage: node todo.js add "Buy milk" | list | done <n> | remove <n> | clear
const fs = require('fs');
const path = require('path');

const FILE = process.env.TODO_FILE || path.join(__dirname, 'todos.json');

function load() {
  if (!fs.existsSync(FILE)) return [];
  return JSON.parse(fs.readFileSync(FILE, 'utf8'));
}

function save(todos) {
  fs.writeFileSync(FILE, JSON.stringify(todos, null, 2));
}

function add(todos, text) {
  if (!text || !text.trim()) throw new Error('Task text is empty');
  return [...todos, { text: text.trim(), done: false }];
}

function markDone(todos, n) {
  const i = Number(n) - 1;
  if (!Number.isInteger(i) || i < 0 || i >= todos.length) throw new Error('No task #' + n);
  return todos.map((t, j) => (j === i ? { ...t, done: true } : t));
}

function remove(todos, n) {
  const i = Number(n) - 1;
  if (!Number.isInteger(i) || i < 0 || i >= todos.length) throw new Error('No task #' + n);
  return todos.filter((_, j) => j !== i);
}

function format(todos) {
  if (todos.length === 0) return 'Nothing to do!';
  const left = todos.filter(t => !t.done).length;
  const lines = todos.map((t, i) => `${i + 1}. [${t.done ? 'x' : ' '}] ${t.text}`);
  return lines.join('\n') + `\n${left} of ${todos.length} left`;
}

function main(argv) {
  const [cmd, ...rest] = argv;
  let todos = load();
  try {
    switch (cmd) {
      case 'add': todos = add(todos, rest.join(' ')); save(todos); break;
      case 'done': todos = markDone(todos, rest[0]); save(todos); break;
      case 'remove': todos = remove(todos, rest[0]); save(todos); break;
      case 'clear': todos = []; save(todos); break;
      case 'list': case undefined: break;
      default: console.log('Commands: add, list, done, remove, clear'); return;
    }
    console.log(format(todos));
  } catch (err) {
    console.error('Error: ' + err.message);
    process.exitCode = 1;
  }
}

if (require.main === module) main(process.argv.slice(2));

module.exports = { add, markDone, remove, format };
