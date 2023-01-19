let count = 0;
let countEl = document.querySelector("#count-el");
let incrementEl = document.querySelector("#increment-el");
let saveBtn = document.querySelector("#save-btn");
let saveEl = document.querySelector("#save-el");
incrementEl.addEventListener("click", function increment() {
  count += 1;
  console.log(count);
  countEl.innerHTML = count;
});
saveBtn.addEventListener("click", function save() {
  let countStr = count + "-";
  saveEl.innerHTML += countStr;
  countEl.innerHTML = 0;
  count = 0;
});
