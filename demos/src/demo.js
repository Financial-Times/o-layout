/*global require*/

//mega hack because we currently have no way of requesting brands for origami.json dependencies
document.querySelector('link').href += "&brand=internal";

document.addEventListener('DOMContentLoaded', () => {
	document.dispatchEvent(new CustomEvent('o.DOMContentLoaded'));
});

//generate list automatically, should be oprtional
let listItems = Array.from(document.querySelectorAll('h2, h3'), (header) => {
	return `<li><a href='#${header.id}'>${header.innerText}</a></li>`;
});

let list = window.l = document.createElement('ol')
list.classList.add('o-layout__navigation');
list.innerHTML = listItems.join('');
	
document.querySelector('.o-layout__sidebar').append(list);

//on page load, check url for permalink, if no permalink, highlight first list element
location.hash ? list.querySelector(`a[href="${location.hash}"]`).classList.add('higlighted') : list.firstElementChild.classList.add('highlighted');

// document.addEventListener('scroll')
