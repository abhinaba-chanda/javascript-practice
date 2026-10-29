// Format a task list for printing.
function formatTask(task, index) {
  return `${index + 1}. [${task.done ? "x" : " "}] ${task.text}`;
}

function formatList(tasks) {
  return tasks.length ? tasks.map(formatTask).join("\n") : "No tasks yet.";
}

module.exports = { formatTask, formatList };
