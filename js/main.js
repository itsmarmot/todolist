/* todo list logic*/
let InputBox = document.querySelector("#inputBox");
let list = document.querySelector("#list");

//event when enter input todo list
InputBox.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    addItem(this.value);
    this.value = "";
  }
});

//create list after input todo list
let addItem = (InputBox) => {
  let listItem = document.createElement("li");
  listItem.innerHTML = `${InputBox}<i></i>`;

  listItem.addEventListener("click", function () {
    this.classList.toggle("done");
  });
	
//remove list when user click delete button	
  listItem.querySelector("i").addEventListener("click", function () {
    listItem.remove();
  });
  //display todo list
  list.appendChild(listItem);
};
