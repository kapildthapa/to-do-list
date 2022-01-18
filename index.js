var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");

// Delete Button
var btn = document.createElement("button");
btn.classList.add("marginLeft10");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var newList = document.createElement("li");
  var btn1 = document.createElement("button");
  btn1.classList.add("marginLeft10");
  btn1.innerHTML = "Done";
  var btn2 = document.createElement("button");
  btn2.classList.add("marginLeft10");
  btn2.innerHTML = "Delete";
  newList.appendChild(document.createTextNode(input.value));
  newList.appendChild(btn2);
  newList.appendChild(btn1);
  ul.appendChild(newList);
  input.value = "";
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.key === "Enter") {
    createListElement();
  }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

// Toggle Done Class in the list

function toggleList(event) {
  console.log(event);
  //   var selected;
  if (event.target.tagName === "LI") {
    // selected = document.querySelector("li.selected");
    event.target.classList.toggle("done");
  } else if (event.target.innerHTML === "Done") {
    event.target.parentElement.classList.toggle("done");
  } else if (event.target.innerHTML === "Delete") {
    event.target.parentElement.remove();
  }
}

ul.addEventListener("click", toggleList);

// Add Done & Delete button within the existing list

Array.from(li).forEach(function (li) {
  var btn1 = document.createElement("button");
  btn1.classList.add("marginLeft10");
  btn1.innerHTML = "Done";
  var btn2 = document.createElement("button");
  btn2.classList.add("marginLeft10");
  btn2.innerHTML = "Delete";
  li.appendChild(btn2);
  li.appendChild(btn1);
});
