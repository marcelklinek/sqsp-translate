function initAndExecute() {
	var myAnchors = document.querySelectorAll('time.published');
	for (var i = 0; i < myAnchors.length; i++) {
	  var item = myAnchors[i];
	  executeReplacement(item);
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