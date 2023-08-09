/**funcion que muestra el menus  */




const icono = document.getElementById('icono-nav')
const nav = document.getElementById('nava')

icono.addEventListener('click',()=>{
    console.log('estoy funcionando');
    menu()
})
const menu = () =>{
   if(nav.className === ""){
    nav.className = "resposive";
   }else{
    nav.className = "";
   }
}
menu()

window.onscroll = function(){
   efectoHabilidade()
   console.log(efectoHabilidade);
   console.log("mi scroll funciona bien ");
}


function efectoHabilidade(){
    let skills = document.getElementById('skills');
    let distancia = window.innerHeight - skills.getBoundingClientRect().top
    if(distancia >= 300){
     document.getElementById("html").classList.add("barra-progreso1");
     document.getElementById("js").classList.add("barra-progreso2");
     document.getElementById("bd").classList.add("barra-progreso3");
     document.getElementById("ps").classList.add("barra-progreso4");
     
    }
}





const typed = new Typed(".typed", {
    stringsElement: "#cadena-texto",//id del elemento que contienes cadenas de texto a mostrar.
    typeSpeed: 75,//velocidad en milisegundo para poner una letra.
    startDelay: 300,//tiempo de retraso al iniciar la animacion.aplica tambien cuando termina y vuelve a iniciar.
    backSpeed: 75,//velocidad en milisegundo para borra una letra.
    smartBackkspace: false,//elimina solamente la palabra que sea nuevas en una cadena de texto.
    shuffle: true,//altera el orden en la que pones la palabra.
    backDelay: 1500,//tiempo de espera despues de que termina de escribir una palabra.
    loop: false,//repite el array de strings.
    loopCout: 1,//cantidad de veces al repetir el array. false = infinitos.
    shoeCursor: true,//muestra el cursor palpitando.
    cursorChar: "|",//caracter para el cursor
    contentType: "html",//'html' o 'null' para texto sin formato.
  });
/*
  const letras= new Typed(".letra", {
    stringsElement: "#texto",//id del elemento que contienes cadenas de texto a mostrar.
    typeSpeed: 75,//velocidad en milisegundo para poner una letra.
    startDelay: 300,//tiempo de retraso al iniciar la animacion.aplica tambien cuando termina y vuelve a iniciar.
    backSpeed: 75,//velocidad en milisegundo para borra una letra.
    smartBackkspace: false,//elimina solamente la palabra que sea nuevas en una cadena de texto.
    shuffle: true,//altera el orden en la que pones la palabra.
    backDelay: 1500,//tiempo de espera despues de que termina de escribir una palabra.
    loop: false,//repite el array de strings.
    loopCout: 1,//cantidad de veces al repetir el array. false = infinitos.
    shoeCursor: true,//muestra el cursor palpitando.
    cursorChar: "|",//caracter para el cursor
    contentType: "html",//'html' o 'null' para texto sin formato.
  });
  */