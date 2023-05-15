//Dupla: Maicon Soares e Rodrigo Alves

let obj1 = {
	Celular:150,
	Fonedeouvido:55,
	Pendrive:37,
	Caixadeaudio:28,
	Tablet:32,
	CarregadorPortatil:29  
}
let obj2 = {
	Celular:38,
	Fonedeouvido:10,
	Pendrive:17,
	Caixadeaudio:8,
	Tablet:5,
	CarregadorPortatil:15
}
function prodRestantes(obj1,obj2) {
	let unidadesRest = {};
	for(let prop in obj1 ){
		unidadesRest[prop] = obj1[prop] - obj2[prop];
	     	
	}
	return unidadesRest;

	
}
let unidadesRest = prodRestantes(obj1,obj2);
console.log(unidadesRest);

