(function(fn) {
	'use strict';
	fn(window.jQuery, window, document);
}(function($, window, document) {
	'use strict';
	
	$(function() {
		$('.sort-direction').on('click', '[data-sort]', function(event) {
			event.preventDefault();
			
			let $this = $(this),
				sortDir = 'desc',
                d = 'M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z',
                title = ' по убыванию';
                
            if ($this.data('sort') !== 'asc') {
                sortDir = 'asc';
                d = 'M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708';
                title = ' по возрастанию';
            }
			
            $this.attr('title', title).data('sort', sortDir).find('.bi').find('path').attr('d', d);
			
			// call sortDesc() or sortAsc() or what have you...
		});
	});

	// $(function() {
	// 	let favBtns = document.getElementsByClassName('favourite');

	// 	for (let btn of favBtns) {
	// 		btn.addEventListener('click', () => function(btn){
	// 			if (btn.classList.contains('checked')) {
	// 				btn.classList.remove('checked');
	// 				//call remove from favourite
	// 			}
	// 			else {
	// 				btn.classList.add('checked');
	// 				//call add to favourite
	// 			}
	// 		});
	// 	}
	// });

	setFavBtnsClick();
}));

function setFavBtnsClick(){
	let favBtns = document.getElementsByClassName('favourite');
	// console.log('btns: ', favBtns);
	
	for (let btn of favBtns) {
		btn.addEventListener('click', () => function(btn){
			console.log('btn: ', btn, 'classList: ', btn.classList);
	
			if (btn.classList.contains('checked')) {
				btn.classList.remove('checked');
			}
			else {
				btn.classList.add('checked');
			}
		});
	}
}

function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}