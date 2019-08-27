

let botaoClicar = document.querySelector('#submit');

botaoClicar.addEventListener('click', function(event){
	event.preventDefault();

	let form = document.querySelector('#contact');

	let name = form.name.value;
	let email = form.email.value; 
	let message = form.message.value;




	if (name.length < 3) {
		 alert('Digite um nome válido');
		 
	}

	if (email.length < 3) {
		alert('Digite um e-mail válido')
		
	}

	if (message.length < 5) {
		alert('Digite uma mensagem válida')
		
	}

	else{
		alert('Seus dados foram enviados com sucesso!');
		form.reset();

	}


})