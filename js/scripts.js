// querySelector
const heading = document.querySelector('.header__texto h2'); // 0 o 1 elementos como máximo.
// heading.textContent = 'Nuevo Heading';
// heading.classList.add('nueva-clase');
console.log(heading);


// querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a'); // 0 a todos los que concuerden con el selector.
enlaces[0].textContent = 'Nuevo Texto para Enlace'; // cambio visible en el navegador.
enlaces[0].classList.add('nueva-clase'); // Método para agregar nueva clase al nav.
enlaces[0].classList.remove('navegacion__enlace'); // Método para remover clase del nav.

// getElementById
const heading2 = document.getElementById('heading'); //Como ya está buscando x ID no necesita el #.
console.log(heading2);

