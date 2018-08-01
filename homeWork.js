console.log("work check");
var data = [{hours:"00" , minutes:"00" , seconds:"00"}];
var secTag = document.createElement("span");
var minTag = document.createElement("span");
var hTag = document.createElement("span");

secTag.textContent = data[0].seconds ;
minTag.textContent = data[0].minutes ;
hTag.textContent = data[0].hours ;

var clock = document.querySelector("#Clock");
clock.append(hTag , ":");
clock.append(minTag, ":");
clock.append(secTag);

function countSeconds(){
	data[0].seconds = Number(data[0].seconds + 1);
	secTag.textContent = data[0].seconds ;
	setBackGround();
	if (data[0].seconds==59) {
		data[0].seconds=0;
	} 
}
function countMinutes(){
	data[0].minutes = Number(data[0].minutes + 1);
	minTag.textContent = data[0].minutes ; 
	if (data[0].minutes==59) {
		data[0].minutes=0;
	}
}

function countHours(){
	data[0].hours = Number(data[0].hours + 1);
	hTag.textContent = data[0].hours ; 
	if (data[0].hours==12) {
		data[0].hours=0;
	}
}

function setBackGround(){
	var strColor = "#00000" + data[0].seconds;
	console.log(strColor);
	document.body.style.backgroundColor = strColor;
}


setInterval (countSeconds, 1000);
setInterval (countMinutes, 60000);
setInterval (countHours, 3600000);









