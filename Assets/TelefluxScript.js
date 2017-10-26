document.getElementById("cbutton").addEventListener("click", calculate);

function calculate() {
	
	var b1 = document.getElementById("b1").value;
	var b2 = document.getElementById("b2").value;
	var v1 = document.getElementById("v1").value;
	var t1 = document.getElementById("t1").value * Math.PI / 180;
	var p1 = document.getElementById("p1").value * Math.PI / 180;
	var t2 = document.getElementById("t2").value * Math.PI / 180;
	var p2 = document.getElementById("p2").value * Math.PI / 180;
	
	var cosx = -1 + Math.cos(t1) + Math.cos(p1);
	var cosy = -1 + Math.cos(t2) + Math.cos(p2);
	var det = Math.pow((b2 * cosy), 2) + Math.pow(v1, 2) + Math.pow(b1, 2) - Math.pow(b2, 2) - (2 * v1 * b1 * cosx);
	var s1a = b2 * cosy + Math.sqrt(det);
	var s1b = b2 * cosy - Math.sqrt(det);
	var s1;
	if (Math.abs(s1a) > Math.abs(s1b)) {
		s1 = roundToTwoPl(s1a);
	}
	else {
		s1 = roundToTwoPl(s1b);
	}
	document.getElementById("output_text").innerHTML = s1.toString();
}

function roundToTwoPl(x) {
	return Math.round(100*x) / 100;
}