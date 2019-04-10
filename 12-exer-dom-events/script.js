var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = ul.querySelectorAll('li')

function inputLength() {
	return input.value.length;
}

function createDelButton() {
	let btn = document.createElement('button')
	btn.innerHTML = 'DEL'
	btn.addEventListener('click', event => {
		deleteListItem(event.target.parentElement)
	})
	return btn
}
function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(createDelButton())
	li.addEventListener('click', toggleDone)
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function deleteListItem(item) {
	ul.removeChild(item)
}

function toggleDone(event) {
	event.target.classList.toggle('done')
}

button.addEventListener("click", addListAfterClick);
listItems.forEach(item => {
	item.querySelector('span').addEventListener('click', toggleDone)
	item.appendChild(createDelButton())
})
input.addEventListener("keypress", addListAfterKeypress);