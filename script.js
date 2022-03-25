// Displays current day at the top of the calendar
var today = moment();
$("#currentDay").text(today.format("[Hello beautiful, today is] dddd[,] MMMM Do[,] YYYY"));



//Each button saves each textarea input to local storage
var textareaInput8 = document.getElementById("description8");
var textareaOutput8 = document.getElementById("description8")
var saveBtn8 = document.getElementById("saveBtn8");

saveBtn8.addEventListener("click", updateOutput8);
textareaInput8.value = localStorage.getItem("content8");

function updateOutput8() {
	localStorage.setItem("content8", textareaInput8.value);
    textareaOutput8.textContent = textareaInput8.value;
}

var textareaInput9 = document.getElementById("description9");
var textareaOutput9 = document.getElementById("description9")
var saveBtn9 = document.getElementById("saveBtn9");

saveBtn9.addEventListener("click", updateOutput9);
textareaInput9.value = localStorage.getItem("content9");

function updateOutput9() {
	localStorage.setItem("content9", textareaInput9.value);
    textareaOutput9.textContent = textareaInput9.value;
}

var textareaInput10 = document.getElementById("description10");
var textareaOutput10 = document.getElementById("description10")
var saveBtn10 = document.getElementById("saveBtn10");

saveBtn10.addEventListener("click", updateOutput10);
textareaInput10.value = localStorage.getItem("content10");

function updateOutput10() {
	localStorage.setItem("content10", textareaInput10.value);
    textareaOutput10.textContent = textareaInput10.value;
}

var textareaInput11 = document.getElementById("description11");
var textareaOutput11 = document.getElementById("description11")
var saveBtn11 = document.getElementById("saveBtn11");

saveBtn11.addEventListener("click", updateOutput11);
textareaInput11.value = localStorage.getItem("content11");

function updateOutput11() {
	localStorage.setItem("content11", textareaInput11.value);
    textareaOutput11.textContent = textareaInput11.value;
}

var textareaInput12 = document.getElementById("description12");
var textareaOutput12 = document.getElementById("description12")
var saveBtn12 = document.getElementById("saveBtn12");

saveBtn12.addEventListener("click", updateOutput12);
textareaInput12.value = localStorage.getItem("content12");

function updateOutput12() {
	localStorage.setItem("content12", textareaInput12.value);
    textareaOutput12.textContent = textareaInput12.value;
}

var textareaInput1 = document.getElementById("description1");
var textareaOutput1 = document.getElementById("description1")
var saveBtn1 = document.getElementById("saveBtn1");

saveBtn1.addEventListener("click", updateOutput1);
textareaInput1.value = localStorage.getItem("content1");

function updateOutput1() {
	localStorage.setItem("content1", textareaInput1.value);
    textareaOutput1.textContent = textareaInput1.value;
}

var textareaInput2 = document.getElementById("description2");
var textareaOutput2 = document.getElementById("description2")
var saveBtn2 = document.getElementById("saveBtn2");

saveBtn2.addEventListener("click", updateOutput2);
textareaInput2.value = localStorage.getItem("content2");

function updateOutput2() {
	localStorage.setItem("content2", textareaInput2.value);
    textareaOutput2.textContent = textareaInput2.value;
}

var textareaInput3 = document.getElementById("description3");
var textareaOutput3 = document.getElementById("description3")
var saveBtn3 = document.getElementById("saveBtn3");

saveBtn3.addEventListener("click", updateOutput3);
textareaInput3.value = localStorage.getItem("content3");

function updateOutput3() {
	localStorage.setItem("content3", textareaInput3.value);
    textareaOutput3.textContent = textareaInput3.value;
}

var textareaInput4 = document.getElementById("description4");
var textareaOutput4 = document.getElementById("description4")
var saveBtn4 = document.getElementById("saveBtn4");

saveBtn4.addEventListener("click", updateOutput4);
textareaInput4.value = localStorage.getItem("content4");

function updateOutput4() {
	localStorage.setItem("content4", textareaInput4.value);
    textareaOutput4.textContent = textareaInput4.value;
}


//color codes timeblocks to indicate past, present or future

//if current hour is === textarea time then pink
//else if current hour is before textarea and not current time 
//then grey 
//else if current hour is after textarea time and not current time
//then green

var description = $(".description");
var currentTime = moment().format('LT');
//var hour = moment().format('LT');

description.each(function () {
    var hour = $(description).css("id");

    if (hour === currentTime) {
        $(description).addClass("present");
        $(description).removeClass("future");
        $(description).removeClass("past");
    }
    else if (hour < currentTime) {
        $(description).addClass("past");
        $(description).removeClass("future");
        $(description).removeClass("present");
    }
    else {
        $(description).addClass("future");
        $(description).removeClass("past");
        $(description).removeClass("present");
    }
});



