function sticky(el) {
	var tagTop = el.getBoundingClientRect().top;
	var onscroll;

	if ('touchmove' in window) {
		onscroll = window.touchmove;
		document.addEventListener('touchmove', function(event){
			event.preventDefault();
			var pageY = window.pageYOffset || document.documentElement.scrollTop;
			if (pageY > tagTop)
				el.className="sticky fixed";
			else
				el.className="sticky";
			onscroll && onscroll(event);
		}, false);
	} else {
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
	}
};

var arraySticky = document.querySelectorAll('.sticky');
Array.prototype.forEach.call(arraySticky, function(item) {
	sticky(item);
});
