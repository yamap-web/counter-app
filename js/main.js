const counter = document.querySelector("#counter");
const up = document.querySelector("#up");
const down = document.querySelector("#down");
let count = 0;

up.addEventListener("click", function () {
  count += 1;
  if (count > 100) {
    count = 0;
  }
  counter.innerHTML = count;
});

down.addEventListener("click", function () {
  count -= 1;
  if (count < 0) {
    count = 0;
  }
  counter.innerHTML = count;
});