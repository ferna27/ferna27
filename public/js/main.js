const btnAnterior = document.getElementById("btnAnterior");
const btnSiguiente = document.getElementById("btnSiguiente");
//const boton = document.querySelector('.boton');
const input = document.getElementById("input");
const statu = document.getElementById("status");
const species = document.getElementById("species");

let pagina = 1;
let inputName = "";
let STATUS = "";
let spacie = "";

btnSiguiente.addEventListener("click", () => {
  if (pagina < 1000) {
    pagina += 1;
    cargaRick();
  }
});

btnAnterior.addEventListener("click", () => {
  if (pagina > 1) {
    pagina -= 1;
    cargaRick();
  }
});

input.addEventListener("keyup", () => {
  inputName = input.value;
  cargaRick();
  //console.log(input.value);
});

statu.addEventListener("click", () => {
  STATUS = statu.value;
  cargaRick();
});

species.addEventListener("click", () => {
  spacie = species.value;
  cargaRick();
});

const cargaRick = async () => {
  try {
    const respuesta = await fetch(`https://rickandmortyapi.com/api/character/?page=${pagina}&name=${inputName}&status=${STATUS}&species=${spacie}`
    );
    //console.log(respuesta);

    //si la respuesta es correcta.
    if (respuesta.status === 200) {
      const datos = await respuesta.json();

      let personaje = [];
      datos.results.forEach((personajes) => {
        //console.log(datos);

        personaje += `<div class="pelicula">

				
				<img class="poster" src="${personajes.image}">
				<h3 class="titulo">    NAME:  ${personajes.name}  STATUS:${personajes.status}  SPICIES:${personajes.species}  Gender:${personajes.gender}</h3>
				</div>`;
        //console.log(personaje);
      });

      document.getElementById("contenedor").innerHTML = personaje;
    } else if (respuesta.status === 401) {
      console.log("hay un problamas");
    } else if (respuesta.status === 404) {
      console.log("no te puedo ayudar");
    } else {
      console.log("no tenemos datos para mostrar no se que paso");
    }
  } catch (error) {
    console.log(error);
  }
};

cargaRick();
