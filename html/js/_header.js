(function(fn) {
	'use strict';
	fn(window.jQuery, window, document);
}(function($, window, document) {
	'use strict';
	
	setFuncToAllExt();
}));

function setFuncToAllExt() {
	let btnsList = document.getElementsByClassName('collapse-btn');
	console.log('btnsList: ', btnsList, '\n');

	for (btn of btnsList){
		console.log('currentBtn:', btn);
		btn.addEventListener('click', () => hideAllExtensionsAndOpenRequired(btn));
	}
}

function hideAllExtensionsAndOpenRequired(clickedBtn) {
	let extList = document.getElementsByClassName('collapse');
	console.log('extList:', extList);

	for (ext of extList){
		if (ext.classList.contains('show')) {
			let collapse = bootstrap.Collapse.getInstance(ext);
			collapse.hide();
		}
	}
}

let signBtn = document.getElementById('sign-in-btn');
let regBtn = document.getElementById('reg-btn');

function showForm(e) {
	let signForm = document.getElementById('sign-in-form');
	let regForm = document.getElementById('reg-form');

	if (e == regBtn) {
		signBtn.classList.remove('selected');
		regBtn.classList.add('selected');
		signForm.classList.add('visually-hidden');
		regForm.classList.remove('visually-hidden');
	}
	else if (e == signBtn) {
		signBtn.classList.add('selected');
		regBtn.classList.remove('selected');
		signForm.classList.remove('visually-hidden');
		regForm.classList.add('visually-hidden');
	}
}