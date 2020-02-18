var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.querySelector(".btn");

css.textContent = "linear-gradient(to right, rgb(255, 0, 0), rgb(0, 255, 0));";
console.log(color1.value);
color1.value = "#ff0000";
color2.value = "#00ff00";

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function rndNum () {
	color1.value ="#"+Math.floor(Math.random()*16777215).toString(16);
	color2.value ="#"+Math.floor(Math.random()*16777215).toString(16);
	body.style.background ="linear-gradient(to right, " + color1.value	+ ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}


btn.addEventListener("click", rndNum);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);