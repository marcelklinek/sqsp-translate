function initAndExecute() {
	var timesPublished = document.querySelectorAll('time.published');
	for (var i = 0; i < timesPublished.length; i++) {
		executeReplacement(timesPublished[i]);
	}
};

function executeReplacement(myAnchor) {
	var date = new Date(extractDateFromElement(myAnchor));
	var localizedDate = date.toLocaleDateString('ru-RU', dateOptions);
	replaceInnerTimeHtml(myAnchor, localizedDate);	
}

function extractDateFromElement(el) {
	return el.attributes['datetime'].value;
}

function replaceInnerTimeHtml(el, text) {
	var newEl = el.cloneNode();
	newEl.innerHTML = '' + text;
	el.parentNode.replaceChild(newEl, el);	
}

var dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
initAndExecute();