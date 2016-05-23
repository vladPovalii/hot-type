require('expose?$!expose?jQuery!jquery');
require('bootstrap-webpack!./bootstrap.config.js');

var FIRST_TYPE = true;

function init(){
	var type_form = document.querySelector("#type_form");
	var target_form = document.querySelector("#target_form");
	type_form.addEventListener("submit", function(event) {
		var type_str = type_form.elements.type_input.value;
		if(type_str !== ""){
			createTypeItem(type_form, type_str);
		}else{
			event.preventDefault();
		}
	});
	target_form.addEventListener("submit", function(event) {
		event.preventDefault();
	}); 
}

function createTypeItem(type_form, type_str) {
	var list = document.querySelector(".type-list");
	var type_item_div = document.createElement("div");
	var type_item_title_div = document.createElement("div");
	var type_title = document.createTextNode(type_str);

	type_item_div.classList.add("type-item");
	if(!(inputCheck(type_str))){
		type_item_div.classList.add("type-item--striked");
	}
	type_item_title_div.className = "type-item-title";

	type_item_title_div.appendChild(type_title);
	type_item_div.appendChild(type_item_title_div);
	if(FIRST_TYPE){
		list.insertBefore(type_item_div, list.childNodes[0]);
	}else{
		list.appendChild(type_item_div);	
	}
	if(list.childNodes.length > 8){
		list.removeChild(list.childNodes[8]); 
	}
	type_form.elements.type_input.value = "";
	event.preventDefault();
}

function inputCheck(type_str){
	var target_form = document.querySelector("#target_form");
	var target_str = target_form.elements.target_input.value;
	if(type_str === target_str){
		return true;
	}else{
		return false;
	}
}

init();
