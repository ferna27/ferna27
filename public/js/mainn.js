const frases = [
    'Donde una puerta se cierra, otra se abre',
    'El arte de vencer se aprende en las derrotas',
    'Intenta y falla, pero nunca falles en intentarlo',
    'La vida no es un problema a ser resuelto, sino una realidad a experimentar',
    'Si te caíste ayer, levántate hoy',
    'La forma más efectiva de hacerlo, es hacerlo',
    'Piensa, sueña, cree y atrévete ',
    'Los obstáculos son esas cosas atemorizantes que ves cuando apartas los ojos de tu meta',
    'No hagas lo que los demás hacen. Haz lo que los demás quisieran hacer y no se atreven',
    'Trabajar duro te llevará a la cima, disfrutar el camino te llevará más lejos',
    'No te conformes con lo que necesitas, lucha por lo que te mereces',
    'No te conformes con lo que necesitas, lucha por lo que te mereces',
    'Mientras más fuertes sean tus pruebas, más grandes serán tus victorias',
    'Si buscas resultados distintos, no hagas siempre lo mismo',
    'Aquel que lo piensa mucho antes de dar un paso, se pasará toda su vida en un solo pie',
    'Los retos son lo que hacen la vida interesante, y superarlos es lo que hace que la vida tenga un significado',
    'Todo error deja una enseñanza, toda enseñanza deja una experiencia, y toda experiencia deja una huella',
    'Tu mejor profesor es tu mayor error',
    'El éxito en la vida no se mide por lo que logras sino por los obstáculos que superas',
    'Cada día es una nueva oportunidad para cambiar tu vida',
    'Parece imposible hasta que se hace',
    'Eres lo que haces, no lo que dices que harás',
    'Lo importante no es lo que se promete, sino lo que se cumple',
    'Todo lo que necesitas para ser feliz se encuentra al otro lado de tus miedos',
    
];
  
  const muestraFrase = (elementoDom) => {
    let frase = frases[Math.floor(Math.random() * 24)];
    elementoDom.innerHTML = `<p> "${frase}" </p>`;
  };
  
  const cambiaColor = (elementoDom) => {
    elementoDom.style.background = '#766df4';
  };
  
  // export { muestraFrase };
  
//Export as default 
  
  /*
  Cada módulo también tiene la opción de exportar un solo valor para representar el módulo completo 
  llamado "DEFAULT EXPORT". 
  un objeto que contiene el set completo de funciones, datos del módulo. */
  
  const recursos = {
    muestraFrase,
    cambiaColor,
  };
  
 //  export { recursos as default };
  export default recursos;