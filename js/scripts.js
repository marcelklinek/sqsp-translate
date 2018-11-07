var myAnchor = document.querySelector('time.published');
var dateString = myAnchor.attributes['datetime'].value;
var date = new Date(dateString);

var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var result = date.toLocaleDateString('ru-RU', options);

var newEl = myAnchor.cloneNode();
newEl.innerHTML = '' + result;

myAnchor.parentNode.replaceChild(newEl, myAnchor);