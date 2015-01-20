document.getElementById('stopButton').onclick = illuminate;
document.getElementById('slowButton').onclick = illuminate;
document.getElementById('goButton').onclick = illuminate;

function illuminate() {
	var lightId = this.id.replace("Button", "Light");
	var light = document.getElementById(lightId);

	var alreadyOn = light.className.indexOf("on") > -1;

	if (alreadyOn) {return false}
	
	var greenOn = document.getElementById("goLight").className.indexOf("on") > -1;

	var bulbs = document.getElementsByClassName('bulb');

	for (var i = 0; i < bulbs.length; i++){
		bulbs[i].className = bulbs[i].className.replace("on", "off");
	}

	if (lightId == "stopLight" && greenOn) {
		var slowLight = document.getElementById("slowLight");
		slowLight.className = slowLight.className.replace("off", "on");

		setTimeout(function(){
			slowLight.className = slowLight.className.replace("on", "off");
			light.className = light.className.replace("off", "on");
		}, 2000);
	} else {
		light.className = light.className.replace("off", "on");
	}
}