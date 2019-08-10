var inputText = document.getElementById("txt");
var items = document.querySelectorAll("#list div");
var tab = [];
var index;
var firstColor = "yellowSquare";

colorTo(firstColor);

var colors = document.querySelectorAll("#color");
colors.forEach(function(color) {
  color.addEventListener("click", function(e) {
    let selected = e.target.className;
    colorTo(selected);
  });
});

if (items.length > 0) {
  items.forEach(function(item) {
    tab.push(item.innerHTML);
  });

  items.forEach(function(item) {
    item.onclick = function() {
      index = tab.indexOf(this.innerHTML);
      inputText.value = this.innerHTML;
    };
  });
}

function addItem() {
  var list = document.getElementById("list");
  var text = document.createTextNode(inputText.value);
  var newDiv = document.createElement("div");
  var color = document.getElementById("sample");
  newDiv.appendChild(text);
  newDiv.classList.add(
    color.className.slice(0, color.className.indexOf("Square"))
  );
  newDiv.onclick = function() {
    index = tab.indexOf(newDiv.innerHTML);
    inputText.value = newDiv.innerHTML;
  };
  list.appendChild(newDiv);
  emptyField();
  recheckElem();
}

function recheckElem() {
  tab.length = 0;
  items = document.querySelectorAll("#list div");
  items.forEach(function(item) {
    tab.push(item.innerHTML);
  });
}

document.body.onkeyup = function(e) {
  if (e.keyCode == 13 && inputText.value !== "") {
    addItem();
  }
};

function emptyField() {
  inputText.value = "";
  index = 2000;
}

function editItem() {
  items[index].innerHTML = inputText.value;
  recheckElem();
}

function editColor(e) {
  items[index].innerHTML = inputText.value;
  var sampleDiv = document.getElementById("sample");
  items[index].setAttribute(
    "class",
    sampleDiv.className.slice(0, sampleDiv.className.indexOf("Square"))
  );
  recheckElem();
}

function deleteItem() {
  if (items.length > 0) {
    items[index].parentNode.removeChild(items[index]);
    inputText.value = "";
  } else {
    errorModal();
  }
  recheckElem();
}

function colorTo(color) {
  var sampleDiv = document.getElementById("sample");
  sampleDiv.setAttribute("class", color);
}

function errorModal() {
  var modal = document.getElementById("modal");
  modal.setAttribute("class", "inViewport");
  modal.addEventListener("click", function() {
    modal.setAttribute("class", "outViewport");
  });
}
