//register serviceworker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/service-worker.js");
}
//serviceworker registration end

var isSourceCode = false;
var isInEditMode = true;

//get all buttons
const buttons = document.getElementsByTagName("button");
const icons = document.getElementsByTagName("i");

//counter variable
var i;

//add event listeners to all buttons
for (i = 0; i < icons.length; i++) {
  icons[i].addEventListener("click", (e) => {
    console.log(e);
    if (!e.path[0].classList.contains("selected-icon")) {
      e.path[0].classList.add("selected-icon");
      e.path[1].classList.add("selected-button");
    } else {
      e.path[0].classList.remove("selected-icon");
      e.path[1].classList.remove("selected-button");
    }
  });
}

//enable design mode when document loaded
function enableEditMode() {
  richTextField.document.designMode = "On";
}

function execCmd(command) {
  richTextField.document.execCommand(command, true, null);
}

function exeCmdWithArg(command, arg) {
  richTextField.document.execCommand(command, true, arg);
}

//change foreground color for text
function changeForeColor() {
  var color = document.getElementById("fore-color").value;
  richTextField.document.execCommand("foreColor", true, color);
}

//change background color for text
function changeBackColor() {
  var color = document.getElementById("back-color").value;
  richTextField.document.execCommand("backColor", true, color);
}

//reset foreground color to default
function resetForeColor() {
  richTextField.document.execCommand("foreColor", true, "#000000");
}

//reset background color to default
function resetBackColor() {
  richTextField.document.execCommand("backColor", true, "#fff");
}

function toggleSource() {
  if (isSourceCode) {
    richTextField.document.getElementsByTagName("body")[0].innerHTML =
      richTextField.document.getElementsByTagName("body")[0].textContent;
    isSourceCode = false;
  } else {
    isSourceCode = true;
    richTextField.document.getElementsByTagName("body")[0].textContent =
      richTextField.document.getElementsByTagName("body")[0].innerHTML;
  }
}

function toggleEdit() {
  if (isInEditMode) {
    document
      .getElementsByClassName("fa-toggle-on")[0]
      .classList.add("fa-toggle-off");
    document
      .getElementsByClassName("fa-toggle-on")[0]
      .classList.remove("fa-toggle-on");

    richTextField.document.designMode = "Off";
    isInEditMode = false;
  } else {
    document
      .getElementsByClassName("fa-toggle-off")[0]
      .classList.add("fa-toggle-on");
    document
      .getElementsByClassName("fa-toggle-off")[0]
      .classList.remove("fa-toggle-off");
    richTextField.document.designMode = "On";
    isInEditMode = true;
  }
}
