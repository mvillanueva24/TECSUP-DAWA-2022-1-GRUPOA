/*fetch("https://reqres.in/api/users?page=2")
    .then((respuesta) => {
        //console.log(respuesta);
        return respuesta.json();
    })
    .then((datos) => {
        console.table(datos);
    })

let nuevoUsuario = {
    name: "Alfredo Saire",
    job: "BOSS",
};

let cabecera = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(nuevoUsuario),
};

fetch("https://reqres.in/api/users", cabecera)
    .then((respuesta) => {
        return respuesta.json();
    })
    .then((usuarioCreado) => {
        console.table(usuarioCreado);
    })
    .catch((error) => {
        console.log(error);
    })*/

let btnPrueba = document.getElementById("btnPrueba");

let modal = document.getElementById("miModal");

let btnCerrar = document.getElementById("btnCerrar");

let divCanciones = document.getElementById("divCanciones");

let btnBusqueda = document.getElementById("btnBusqueda");

let inputBusqueda = document.getElementById("inputBusqueda");

btnPrueba.addEventListener("click", () => {
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
    document.body.style.height = "100%";
});

btnCerrar.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
    document.body.style.height = "auto";
});

const buscarDeezer = async (busqueda) => {
    let configuracion = {
        method: "GET",
        headers: {
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
            'X-RapidAPI-Key': 'c15a0d78e3mshfea175e7874e095p1d9575jsnb64544b3fe31'
          }
    };

    try {
        let respuesta = await fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${busqueda}`, configuracion);
        const datos = await respuesta.json();
        console.log(datos.data);
        if (datos.data.length === 0){
            window.open("404.html")
            window.close("index.html")
        }
        dibujarCanciones(datos.data);
    } catch (error) {
        console.log(error);
    }
};

btnBusqueda.addEventListener("click", () => {
    buscarDeezer(inputBusqueda.value);
});

const dibujarCanciones = (arregloCanciones) => {
    let htmlCanciones = "";

    for (const {title: t, preview: p, artist: {name: n, picture_medium: p_m}} of arregloCanciones) {
        htmlCanciones =
          htmlCanciones +
          `<div class="cancion-container">
          <div class="cancion">
              <div class="cancion-img">
                  <img src="${p_m}" alt="${t}">
              </div>
              <div class="cancion-content">
                  <h3>${t}</h3>
                  <p>${n}</p>
                  <audio controls>
                      <source src="${p}>
                  </audio>
              </div>
          </div>
      </div>`;
      }

    
    divCanciones.innerHTML = htmlCanciones;
};