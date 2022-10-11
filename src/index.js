import "./styles.css";
import { sortWords } from "./exercise";

(() => {
  const array = ['aa', 'bb', 'z', 'yyyy'];

  document.getElementById("app").innerHTML = `
    <h1>Sort Word</h1>
    <p>Array: <code>${JSON.stringify(array)}</code></p>
    <p><button id="btn">Run Code</button><p/>
    <p><pre><code id="rta"></code></pre></p>
  `;

  const runBtn = document.getElementById('btn');
  const rtaElement = document.getElementById('rta');

  runBtn.addEventListener('click', () => {
    try {
      rtaElement.innerHTML = sortWords(array);
    } catch (error) {
      rtaElement.innerHTML = error;
    }
  });
})();
