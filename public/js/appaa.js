//import { muestraFrase as cambiaColor } from '../js/mainn.js';

 import funciones from '../js/mainn.js';

const { muestraFrase,  cambiaColor } = funciones;

const button = document.querySelector('.btn');
const contenedor = document.querySelector('#contenedor');

button.addEventListener('click', () => {
  muestraFrase(contenedor);
  cambiaColor(button);
   x(contenedor);
});