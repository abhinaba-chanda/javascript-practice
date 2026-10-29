// Count done and pending tasks.
function stats(tasks) {
  const done = tasks.filter((t) => t.done).length;
  return { total: tasks.length, done, pending: tasks.length - done };
}

module.exports = { stats };
