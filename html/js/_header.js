(function(fn) {
	'use strict';
	fn(window.jQuery, window, document);
}(function($, window, document) {
	'use strict';
	
}));

// $('.collapse').on('show.be.collapse', function(e, [eventInfo]) {
//     let collapseList = $(this).parent();
//     for(let i = 0; i < collapseList.length; i++) {
//         let collapse = collapseList[i];
//         collapse.trigger('hide.bs.collapse', [eventInfo]);
//     }

//     $(this).trigger('show.bs.collapse', [eventInfo]);
// });

// $(function() {
//     var collapseList = document.getElementsByClassName('collapse');
//     for(let i = 0; i < collapseList.length; i++) {
//         let collapse = collapseList[i];
//         collapse.addEventListener('show.bs.collapse', hideAllOtherCollapses(collapseList));
//     }
// });

// function hideAllOtherCollapses(collapseList) {
//     for(let i = 0; i < collapseList.length; i++){
//         let collapse = collapseList[i];
//         let hideEvent = new Event('hide.bs.collapse');

//         collapse.dispatchEvent(hideEvent);
//     }

//     let showEvent = new Event('show.bs.collapse');
//     $(this).dispatchEvent(showEvent);
// }