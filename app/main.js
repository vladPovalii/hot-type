require('expose?$!expose?jQuery!jquery');
require('bootstrap-webpack!./bootstrap.config.js');

var form = document.querySelector("#type");
form.addEventListener("submit", function(event) {
	var h = document.createElement("h3");
	var t = document.createTextNode(form.elements.input.value);
	h.appendChild(t);
	document.body.appendChild(h);
	form.elements.input.value = "";
	event.preventDefault();
}); 
