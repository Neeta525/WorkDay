// Displays current day at the top of the calendar
var today = moment();
$("#currentDay").text(today.format("[Today is] dddd"));

//Save 
// var textareaInput = document.querySelector(".description");
// var textareaOutput = document.querySelector(".description")
// var saveBtn = document.querySelector(".saveBtn");

// saveBtn.addEventListener("click", updateOutput);
// textareaInput.value = localStorage.getItem("content");

// function updateOutput() {
// 	localStorage.setItem("content", textareaInput.value);
//     textareaOutput.textContent = textareaInput.value;
// }


var textareaInput = document.getElementById("description4");
var textareaOutput = document.getElementById("description4")
var saveBtn4 = document.getElementById("saveBtn4");

saveBtn4.addEventListener("click", updateOutput);
textareaInput.value = localStorage.getItem("content");

function updateOutput() {
	localStorage.setItem("content", textareaInput.value);
    textareaOutput.textContent = textareaInput.value;
}

var textareaInput = document.getElementById("description2");
var textareaOutput = document.getElementById("description2")
var saveBtn2 = document.getElementById("saveBtn2");

saveBtn2.addEventListener("click", updateOutput);
textareaInput.value = localStorage.getItem("content");

function updateOutput() {
	localStorage.setItem("content", textareaInput.value);
    textareaOutput.textContent = textareaInput.value;
}

//color codes timeblocks to indicate past, present or future

//if current hour is === textarea time then red
//else if current hour is before textarea and not current time 
//then grey 
//else if current hour is after textarea time and not current time
//then green


var past;
var present;
var future;

