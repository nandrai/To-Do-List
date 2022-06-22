const item = document.querySelector("#to-do-item");
const list = document.querySelector("#to-do-list");
const toDo = document.querySelectorAll(".to-do");

item.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    addToDo(this.value);
    this.value = "";
  }
});

const addToDo = function (item) {
  const newToDo = document.createElement("li");
  newToDo.innerHTML = `${item} <i class="fa-solid fa-xmark"></i>`;
  list.appendChild(newToDo);

  newToDo.addEventListener("click", function () {
    this.classList.toggle("done");
  });

  newToDo.querySelector("i").addEventListener("click", function () {
    newToDo.remove();
  });
};
