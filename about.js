console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submitted succesfully!');
}

function onMouse() {
	alert('You are mad cute!')
}


document.querySelector('img').addEventListener('mouseover', onMouse)


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);