console.log("work check");
// variable data for JSON import : step 2
var data = [{hours:"00", minutes:"00" , seconds:0}];

// string with "0" shown on the clock 
var showSeconds = "00"; 
var showMinutes = data[0].minutes; 
var showHours   = data[0].hours; 

// Creates span TAGS for HH:MM:SS
var secTag = document.createElement("span");
var minTag = document.createElement("span");
var hTag = document.createElement("span");

secTag.textContent = showSeconds ;
minTag.textContent = showMinutes ;
hTag.textContent = showHours ;

var clock = document.querySelector("#Clock");
clock.append(hTag , ":");
clock.append(minTag, ":");
clock.append(secTag);

function countSeconds(){
	data[0].seconds = data[0].seconds + 1;
	if (data[0].seconds<10) {
		showSeconds = "0" + data[0].seconds;
	}
	else {
		showSeconds = data[0].seconds;
	}
	secTag.textContent = showSeconds ;
	setBackGround();
	if (data[0].seconds==59) {
		data[0].seconds=0;
	} 
}
function countMinutes(){
	data[0].minutes = Number(data[0].minutes + 1);
	if (data[0].minutes < 10 ) {
		showMinutes = "0" + data[0].minutes;
	}
	else {
		showMinutes = data[0].minutes;
	}

	minTag.textContent = showMinutes ; 
	if (data[0].minutes==59) {
		data[0].minutes=0;
	}
}

function countHours(){
	data[0].hours = Number(data[0].hours + 1);
	if (data[0].hours <10) {
		showHours = "0" + data[0].hours;
	}
	else {
		showHours = data[0].hours;
	}
	hTag.textContent = showHours ; 
	if (data[0].hours==12) {
		data[0].hours=0;
	}
}

function setBackGround(){
	var colorStr = "#" + showSeconds+showMinutes+showMinutes;
	console.log(colorStr);
	document.body.style.backgroundColor = colorStr;
}


setInterval (countSeconds, 1000);
setInterval (countMinutes, 60000);
setInterval (countHours, 3600000);









