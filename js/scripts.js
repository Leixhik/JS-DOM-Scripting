// querySelector
const heading = document.querySelector('.header__texto h2'); // 0 o 1 elementos como máximo.
// heading.textContent = 'Nuevo Heading';
// heading.classList.add('nueva-clase');
console.log(heading);


// querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a'); // 0 a todos los que concuerden con el selector.
enlaces[0].textContent = 'Nuevo Texto para Enlace'; // cambio visible en el navegador.
enlaces[0].classList.add('nueva-clase'); // Método para agregar nueva clase al nav.
// enlaces[0].classList.remove('navegacion__enlace'); // Método para remover clase del nav.

// // getElementById
// const heading2 = document.getElementById('heading'); //Como ya está buscando x ID no necesita el #.
// console.log(heading2);

// // 1. Generar un nuevo enlace
// const nuevoEnlace = document.createElement('A');

// // 2. Agregar el Href
// nuevoEnlace.href = 'nuevo-enlace.html';

// // 3. Agregar el Texto
// nuevoEnlace.textContent = 'Un Nuevo Enlace';

// // 4. Agregar la Clase
// nuevoEnlace.classList.add('navegacion__enlace');

// // 5. Agregarlo al Documento
// const navegacion = document.querySelector('.navegacion');
// navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace);

// Ejemplo para Github