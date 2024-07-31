document.addEventListener("DOMContentLoaded", () => {
  const worker = new Worker("./worker.js");

  for (let i = 0; i < 100000; i++) {
    worker.postMessage(`DOMContentLoaded ${i}`);
  }

  const button = document.querySelector("#click-incrementer");
  const text = document.querySelector("#clicks-count");

  button.addEventListener("click", () => {
    worker.postMessage(`Clicking`);
    for (let i = 0; i < 3000; i++) {
      worker.postMessage(`Clicking log ${i}`);
    }
    text.innerHTML = parseInt(text.innerHTML) + 1;
  });
});
