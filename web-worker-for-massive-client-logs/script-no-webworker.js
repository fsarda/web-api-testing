document.addEventListener("DOMContentLoaded", () => {
  for (let i = 0; i < 100000; i++) {
    console.log(`DOMContentLoaded ${i}`);
  }

  const button = document.querySelector("#click-incrementer");
  const text = document.querySelector("#clicks-count");

  button.addEventListener("click", () => {
    for (let i = 0; i < 3000; i++) {
      console.log(`Clicking log ${i}`);
    }
    text.innerHTML = parseInt(text.innerHTML) + 1;
  });
});
