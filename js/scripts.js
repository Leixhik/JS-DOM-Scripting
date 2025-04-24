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

// 1. Generar un nuevo enlace
const nuevoEnlace = document.createElement('A');

// 2. Agregar el Href
nuevoEnlace.href = 'nuevo-enlace.html';

// 3. Agregar el Texto
nuevoEnlace.textContent = 'Un Nuevo Enlace';

// 4. Agregar la Clase
nuevoEnlace.classList.add('navegacion__enlace');

// 5. Agregarlo al Documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace);

// Eventos

// console.log(1);

// window.addEventListener('load', function(){ // Load espera a que el JS y los archivos que dependen del HTML estén listos.
//     console.log(2);
// });

// window.onload = function(){ // Igual que el anterior.
//     console.log(3);
// };

// document.addEventListener('DOMContentLoaded', function(){ // Solo espera a que el HTML esté listo, no espera a CSS o imágenes.
//     console.log(4);
// });

// console.log(5);

// window.onscroll = function(){
//     console.log('scrolling...');
// };

// Seleccionar elementos y asociarles un evento
// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function(evento){
//     console.log(evento);
//     evento.preventDefault();

//     // Util para validar un formulario

//     console.log('Enviando Formulario');
// });

// Eventos de lo Inputs y Textareas

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
};

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');


nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

// El evento de Submit
formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

    // Validar el formulario
    const {nombre, email, mensaje} = datos; // Destructuring para obtener los valores de datos.
    if(nombre === '' || email === '' || mensaje === '') {
        mostrarError('Todos los campos son obligatorios');
        return; // Corta la ejecución del código
    } else if(email.indexOf('@') === -1){
        mostrarError('El email no es válido'); // Si no hay un @ en el email, se muestra el error.
        return; // Corta la ejecución del código
    }else {
        mostrarMensajeExito('Mensaje Enviado Correctamente'); // Si todo está bien, se muestra el mensaje de éxito.
    }

    // Enviar el formulario
    console.log('Enviando Formulario');
});

function leerTexto(e) {
    // console.log(e.target.value);
    datos[e.target.id] = e.target.value; // Guardar el valor en el objeto datos.
    // console.log(e.target);
    // console.log(datos);
};

// Mostrar un error en pantalla
function mostrarError(mensaje){
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('error');

    formulario.appendChild(error);

    // Eliminar el error después de 3 segundos
    setTimeout(()=>{
        error.remove();
    }, 5000);
};

// Mostrar un mensaje de Éxito
function mostrarMensajeExito(mensaje){
    const correcto = document.createElement('P');
    correcto.textContent = mensaje;
    correcto.classList.add('correcto');

    formulario.appendChild(correcto);

    // Eliminar el error después de 3 segundos
    setTimeout(()=>{
        correcto.remove();
    }, 5000);
};