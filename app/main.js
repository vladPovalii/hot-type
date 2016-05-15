require('expose?$!expose?jQuery!jquery');
require('bootstrap-webpack!./bootstrap.config.js');

var form = document.querySelector("#type");
form.addEventListener("submit", function(event) {
	var type_div = document.createElement("div");
	var type_title = document.createTextNode(form.elements.col_3.value);
	type_div.className = "type-item";
	type_title.className = "type-item__title";
	type_div.appendChild(type_title);
	document.body.appendChild(type_div);
	form.elements.col_3.value = "";
	event.preventDefault();
}); 
