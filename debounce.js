// Run fn only after calls stop for `wait` ms.
function debounce(fn, wait) {
  let timer = null;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), wait);
  };
}

module.exports = { debounce };
