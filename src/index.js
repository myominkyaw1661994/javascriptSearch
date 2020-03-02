import "./styles.css";

var addForm = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");

//From submt
addForm.addEventListener("submit", addItem);
itemList.addEventListener("click", removeItem);
filter.addEventListener("keyup", filterItem);

//Add items
function addItem(e) {
  e.preventDefault();

  var inputItem = document.getElementById("item");
  // console.log(inputItem.value);

  //create element
  var li = document.createElement("li");
  // add class
  li.className = "list-group-item";
  //add textNode
  li.appendChild(document.createTextNode(inputItem.value));
  //create the button
  var deleteBtn = document.createElement("button");
  //add Class
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";
  //Append text in button
  deleteBtn.appendChild(document.createTextNode("X"));
  //Appen button to li
  li.appendChild(deleteBtn);

  //add to the itemlist
  itemList.appendChild(li);

  inputItem.value = "";
}

function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    // if (confirm("Are you sure?")) {
    var li = e.target.parentElement;
    itemList.removeChild(li);
    // }
  }
}

function filterItem(e) {
  //convert
  var text = e.target.value.toLowerCase();

  var items = itemList.getElementsByTagName("li");

  Array.from(items).forEach(function(item) {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
