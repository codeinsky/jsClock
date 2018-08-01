console.log("hello");
var a = [2,3,4]
var b = a.map(function(n){  // map creates new array 
	return n+2;
});
var c = a.filter(function(n){ return n>2;}) // filter the array that gets items bigger then 1
var d = a.join('/');
var e = a.map(n=>n+2);
console.log(b);
console.log(c);
console.log(d);
console.log("that is new type " + e);
document.querySelector('html'); // very Usefull to search DOM's

// function in side TimeOut is delayed by 2000seconds 
setTimeout(() => {
var title = document.querySelector('p');
console.log (title);
title.textContent += "that is changed text"
},2000);
document.querySelector('#change').addEventListener('click' , event => {
	document.querySelector('.paragraph').textContent += "Button was clicked";
	
});
