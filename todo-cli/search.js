// Search tasks by keyword, case insensitive.
function search(tasks, keyword) {
  const k = keyword.toLowerCase();
  return tasks.filter((t) => t.text.toLowerCase().includes(k));
}

module.exports = { search };
