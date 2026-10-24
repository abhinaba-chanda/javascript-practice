let count = 0;
const el = document.getElementById("count");
const render = () => (el.textContent = count);
document.getElementById("inc").onclick = () => { count++; render(); };
document.getElementById("dec").onclick = () => { count--; render(); };
document.getElementById("reset").onclick = () => { count = 0; render(); };
