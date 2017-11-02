//nombre de la funcion igual al evento que estoy creando// //la class puede tener el mismo nombre de otra//TODO SE CREA EN ORDEN

function add(){
	//almacenando valor//
	var comments = document.getElementById("comment").value; //rescato el valor con . value//
	//para limpiar el valor//
	document.getElementById("comment").value = "";//para cuando agarre este valor lo limpie del text area//
    var newComments = document.createElement('div');//crear un div que contenga todo lo que viene//
    var cont = document.getElementById('cont');//agrega un id al contenedor div que se creo arriba//
    var check = document.createElement('input');//es un input tipo checkbox//
    check.type = 'checkbox';
    //TODO ORDENADO//
    var paragraph =  document.createElement('p'); //creamos un p//
    paragraph.classList.add('color');//solo esta creado el elemento P, no hay nada dentro del p//
    var nodoText = document.createTextNode(comments);//solo se llama, sin comillas, que se saca de la primera variable//
    paragraph.appendChild(nodoText);//nodotexto es hijo de padre//
    var heart = document.createElement('i'); //para crear un icono, se utiliza como valor la letra i//
    heart.classList.add('fa', 'fa-heart', 'heart');//para agregar una clase a mi elemento creado//
    var trash = document.createElement('i'); //para crear un icono, se utiliza como valor la letra i//
    trash.classList.add('fa', 'fa-trash', 'trash');
    //de adentro hacia afuera, despues se engloba a todo//
    newComments.appendChild(check);
    newComments.appendChild(paragraph);
    newComments.appendChild(trash);
    newComments.appendChild(heart);//cuando se llaman a las variables no tienen que ir en comillas//
    cont.appendChild(newComments);//newcomments hijo de cont//
    //escuchadores//
    check.addEventListener('click', function(){
    	//queremos que el parrafo se raye//
    	paragraph.classList.toggle('strike-out');
    }) //function parentesis e jecuta una funcion anonima//

    trash.addEventListener('click', function(){
    cont.removeChild(newComments);
})
    heart.addEventListener('click', function(){
    	heart.classList.toggle('red');
    })
}

