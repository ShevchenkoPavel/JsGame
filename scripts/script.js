function setOpacity(obj, value) {
	obj.style.opacity = value;
}

var s = 30;
var victory = false;
function timer() {
	var t = s;
	s--;
	if (t == 0) {
		victory = true;
		setTimeout(function(){}, 1000);
	} else {setTimeout(timer, 1000)}
}

var hitpoints = parseInt(10);

var red = document.getElementById("red");
var orange = document.getElementById("orange");
var yellow = document.getElementById("yellow");
var green = document.getElementById("green");

setOpacity(red, 0);
setOpacity(orange, 0);
setOpacity(yellow, 0);
setOpacity(green, 0);

var arr = [red, green, yellow, orange];

var hp = document.getElementById("hp");
hp.textContent = hitpoints + " hp";

var step = parseFloat(0.1);
var count = parseFloat(1);
var showtime = 1000;

function lightout(ob) {
	setOpacity(ob, 1);
	var interval;
	var c = count;
	
	interval = setInterval(function () {
		ob.onclick = function() {
			clearInterval(interval);
			setOpacity(ob, 0);
		}
		
		if (victory) {
			clearInterval(interval);
			setOpacity(red, 0);
			setOpacity(orange, 0);
			setOpacity(yellow, 0);
			setOpacity(green, 0);
			hp.textContent = "you win with " + hitpoints + " hp";
			return 0;
		}
		
		if (!hitpoints) {
			clearInterval(interval);
			setOpacity(red, 0);
			setOpacity(orange, 0);
			setOpacity(yellow, 0);
			setOpacity(green, 0);
			return 0;
		}
		
		c -= parseFloat(step);
		setOpacity(ob, parseFloat(c));
		if (ob.style.opacity == 0.1) {
			clearInterval(interval);
			setOpacity(ob, 0);
			hitpoints--;
			hp.textContent = hitpoints + " hp";
		}
	}, showtime);
}

var i = 0;
var iv;

setTimeout(timer, 1000);

	iv = setInterval (function() {
	if (!hitpoints) {
		hp.textContent = "you loose";
		clearInterval(iv);
	}
	if (arr[i].style.opacity >= 0) {
	lightout(arr[i]);
	}
	i++;
	if (i==4) {
		i = parseInt(0);
	}
	}, showtime);

/**
var interval;
interval = setInterval(function () {
	count -= parseFloat(step);
	setOpacity(red, parseFloat(count));
	if (red.style.opacity == 0.1) {
		clearInterval(interval);
		hitpoints--;
	}
}, 1000);
*/
