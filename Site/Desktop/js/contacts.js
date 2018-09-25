function initialize(){
	var btn_contact = document.getElementById('btn_contact');
	btn_contact.addEventListener('click',writeContact);
}

function writeContact(evt){
	//todo : il faut parser le formulaire pour en faire un JSON
	var form = document.getElementById('contactform');
	var formData = new FormData(form);
	var contact = {}; //initialisation de la variable contact qui contient l'objet à insérer

	for(var i = 0; i < form.length;i++){
		console.log('form[' + i + '].name : ' + form[i].name);
		console.log('value : ' + formData.get(form[i].name));
		contact(form[i].name) = formData.get(form[i].name);
	}

	delete contact.button; //le bouton est envoyé dans un post
	console.log('contact : ' , contact);
	var contacts = JSON.parse(localStorage.getItem('contacts')) || [];
	contacts.push(contact);
	localStorage.setItem('contacts', JSON.stringify(contacts));
	evt.preventDefault();
	form.reset();
}
/** au chargement de la page contact.html appel de la fonction initialize() **/
window.onload = initialize();

