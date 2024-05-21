let nom = prompt('Quin és el teu nom?');
let cognom = prompt('Quina és el teu cognom');
let edat = prompt ('Quina és la teva edat?');

let result= document.getElementById('result');

let message = (`El meu nom és ${nom} ${cognom} i tinc ${edat} anys`);

console.log (message);
alert (message);
result.innerHTML = message;