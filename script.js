var css = document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var canvas = document.querySelector("body");
var randomColor=document.getElementById("random");

function setGradient(){
	canvas.style.background = "linear-gradient(to right, " 
							+ color1.value 
							+ ", " 
							+ color2.value 
							+ ")";
	css.textContent = "To use this Gradient, add the following to the \"body\" tag of CSS file \"background: " 
					+ canvas.style.background 
					+ ";\"";
}
function generateRandomColor(){
//	color1.value = '#'+(function lol(m,s,c){return s[m.floor(m.random() * s.length)] + (c && lol(m,s,c-1));})(Math,'0123456789ABCDEF',4);
//	color2.value = '#'+(function lol(m,s,c){return s[m.floor(m.random() * s.length)] + (c && lol(m,s,c-1));})(Math,'0123456789ABCDEF',4);
	color1.value = '#'+('00000'+(Math.random()*(1<<24)|0).toString(16)).slice(-6);
	color2.value = '#'+('00000'+(Math.random()*(1<<24)|0).toString(16)).slice(-6);
	setGradient();
}

css.textContent = "To use this Gradient, add the following to the \"body\" tag of CSS file \"background: " 
				+ "linear-gradient(to right, " 
				+ color1.value 
				+ ", " 
				+ color2.value 
				+ ")" 
				+ ";\"";
randomColor.addEventListener("click", generateRandomColor);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);	

