const select = document.querySelector("select");
const listContainer = document.querySelector(".list");

function buildList(event) {
  console.log(event.target.value);
  console.log(event);

  const amount = event.target.value;

  listContainer.innerHTML = "";

  for (let i = 1; i <= amount; i++) {
    listContainer.innerHTML += `<a class = "item" href="details.html?id=${i}">${i}</a>`;
  }

}

select.addEventListener("change", buildList);
