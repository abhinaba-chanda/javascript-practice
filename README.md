<h1 align="center">⚡ JavaScript Practice</h1>
<p align="center"><img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" /> <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" /> <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" /> <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" /> <a href="https://github.com/abhinaba-chanda/javascript-practice/actions/workflows/test.yml"><img src="https://github.com/abhinaba-chanda/javascript-practice/actions/workflows/test.yml/badge.svg" alt="tests" /></a></p>

<p align="center">Small JavaScript projects from my learning journey, from DOM basics in the browser to array methods and string logic in Node.js.</p>

## 📂 Projects

| Project | What it does | Concepts practiced |
|---|---|---|
| [`counter/`](counter) | A click counter web page with +, − and Reset buttons, styled in a dark theme | DOM, events, CSS |
| [`array-methods.js`](array-methods.js) | Doubles, filters and sums a list of numbers | `map`, `filter`, `reduce`, arrow functions |
| [`palindrome.js`](palindrome.js) | Checks whether words and sentences read the same backwards | regex, strings, spread operator |
| [`fizzbuzz.js`](fizzbuzz.js) | Classic FizzBuzz from 1 to n | loops, modulo `%`, arrays |
| [`temperature.js`](temperature.js) | Converts Celsius to Fahrenheit and back | functions, `toFixed`, `process.argv` |
| [`vowel-count.js`](vowel-count.js) | Counts the vowels in a sentence | regex, `match()` |
| [`shopping-cart.js`](shopping-cart.js) | Cart total, discount codes and the most expensive item | arrays of objects, `reduce` |

## 🎮 Mini projects

| Project | What it does | Concepts practiced |
|---|---|---|
| [`todo-cli/`](todo-cli) | Terminal to-do list: add, list, done, remove and search tasks saved in a JSON file | `fs`, `process.argv`, modules, tests |

## ▶️ How to run

```bash
git clone https://github.com/abhinaba-chanda/javascript-practice.git
cd javascript-practice
node array-methods.js
node palindrome.js
```

For the counter, open `counter/index.html` in any browser.

## ✅ Tests

The exercises export their functions and are tested with Node's built-in test runner (no packages to install). GitHub Actions runs them on every push.

```bash
npm test
```

## 🧠 What I learned
- Selecting elements and reacting to clicks with the DOM
- Writing short, clean code with modern ES6+ syntax
- Cleaning text with regular expressions
- Testing my functions with `node:test` and `assert`

## 🚀 Next ideas
- [ ] Save the counter value in `localStorage`
- [ ] Turn the palindrome checker into a web page
- [ ] Build a to-do app in the browser

---
<p align="center">Made with 💙 by <a href="https://github.com/abhinaba-chanda">Abhinaba</a></p>
