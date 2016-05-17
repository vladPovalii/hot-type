require('expose?$!expose?jQuery!jquery');
require('bootstrap-webpack!./bootstrap.config.js');

function subscibeForSubmit(){
	var form = document.querySelector("#type");
	var list = document.querySelector(".type-list");
	form.addEventListener("submit", function(event) {
		if(form.elements.col_3.value){
			createTypeItem(form, list);
		}else{
			event.preventDefault();
		}
	}); 
}

function createTypeItem(submited_form, parent_div) {
	var type_item_div = document.createElement("div");
	var type_item_title_div = document.createElement("div");
	var type_title = document.createTextNode(submited_form.elements.col_3.value);

	type_item_div.classList.add("type-item");
	type_item_div.classList.add("type-item--completed");
	type_item_title_div.className = "type-item-title";

	type_item_title_div.appendChild(type_title);
	type_item_div.appendChild(type_item_title_div);
	parent_div.appendChild(type_item_div);
	submited_form.elements.col_3.value = "";
	event.preventDefault();
}

subscibeForSubmit();