console.log("work check");
console.log("JSON check");

var  dataClock = {hours:"05", minutes:"00" , seconds:0};
$.get ("clock.json" , function(json)
	{console.log(json.hours);
		console.log(json.minutes);
		dataClock.hours = json.hours;
		dataClock.minutes= json.minutes;
		

console.log(dataClock);
var secTag = document.createElement("span");
var minTag = document.createElement("span");
var hTag = document.createElement("span");
secTag.textContent = "00" ;
minTag.textContent = dataClock.minutes ;
hTag.textContent = dataClock.hours ;

var clock = document.querySelector("#Clock");
clock.append(hTag , ":");
clock.append(minTag, ":");
clock.append(secTag);

function countSeconds(){
	 dataClock.seconds =  dataClock.seconds + 1;
	if ( dataClock.seconds<10) {
		showSeconds = "0" +  dataClock.seconds;
	}
	else {
		showSeconds =  dataClock.seconds;
	}
	secTag.textContent = showSeconds ;
	setBackGround();
	if ( dataClock.seconds==59) {
		 dataClock.seconds=0;
	} 
}
function countMinutes(){
	 dataClock.minutes = Number(dataClock.minutes) + 1;
	console.log(dataClock.minutes);
	if ( dataClock.minutes < 10 ) {
		console.log("zerro");
		showMinutes = "0" +  dataClock.minutes;
	}
	else {
		console.log("no zerro")
		showMinutes =  dataClock.minutes;
	}

	minTag.textContent = showMinutes ; 
	if ( dataClock.minutes==59) {
		 dataClock.minutes=0;
	}
}

function countHours(){
	 dataClock.hours = Number( dataClock.hours) + 1;
	if ( dataClock.hours <10) {
		showHours = "0" +  dataClock.hours;
	}
	else {
		showHours =  dataClock.hours;
	}
	hTag.textContent = showHours ; 
	if ( dataClock.hours==12) {
		 dataClock.hours=0;
	}
}

function setBackGround(){
	var colorStr = "#" + dataClock.seconds+dataClock.hours+dataClock.seconds;
	console.log(colorStr);
	document.body.style.backgroundColor = colorStr;
}



setInterval (countSeconds, 1000);
setInterval (countMinutes, 60000);
setInterval (countHours, 3600000);

});







