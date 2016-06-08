function sticky(el) {
	var tagTop = el.getBoundingClientRect().top;
	var onscroll;
	if (window.onscroll)
		onscroll = window.onscroll;
	window.onscroll = function(event) {
		var pageY = window.pageYOffset || document.documentElement.scrollTop;
		if (pageY > tagTop)
			el.className="sticky fixed";
		else
			el.className="sticky";
		onscroll && onscroll(event);
	};
};

var arraySticky = document.querySelectorAll('.sticky');
Array.prototype.forEach.call(arraySticky, function(item) {
	sticky(item);
});
