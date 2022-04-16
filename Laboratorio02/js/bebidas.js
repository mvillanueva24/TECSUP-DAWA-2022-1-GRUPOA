let listaBebidas = [
    {
        id: 1,
        nombre: "FANTA",
        descripcion: " Gaseosa FANTA Naranja Botella 3L",
        precio:  6.50,
        stock: 6,
        imagen: "https://plazavea.vteximg.com.br/arquivos/ids/525927-1000-1000/29856.jpg",
    },
    {
        id: 2,
        nombre: "COCA COLA",
        descripcion:"Gaseosa COCA COLA Botella 500ml",
        precio: 2.60,
        stock: 6,
        imagen: "https://plazavea.vteximg.com.br/arquivos/ids/525958-1000-1000/281027.jpg",
    },
    {
        id: 3,
        nombre: "GRAN CRUZ",
        descripcion: "Pack Pisco Quebranta GRAN CRUZ Botella 700ml + Gaseosa EVERVESS Ginger Ale Botella 1.5L",
        precio: 60.90,
        stock:10,
        imagen: "https://plazavea.vteximg.com.br/arquivos/ids/2979793-1000-1000/pack-pisco-quebranta-gran-cruz-botella-700ml-gaseosa-evervess-ginger-ale-botella-1-5l.jpg",
    },
    {
        id: 4,
        nombre: "CARTAVIO",
        descripcion: "Pack Ron CARTAVIO Reserva 8 Años Botella 750ml + Gaseosa COCA COLA Botella 1.5L",
        precio: 46.90,
        stock: 7,
        imagen: "https://plazavea.vteximg.com.br/arquivos/ids/2289446-1000-1000/pack-ron-cartavio-reserva-8-anos-botella-750ml-gaseosa-coca-cola-botella-1-5l.jpg",
    },
    {
        id: 5,
        nombre: "OLD TIMES",
        descripcion: "GaseosaPack Whisky OLD TIMES Blended Red Botella 750ml + Gaseosa GUARANÁ Botella 2L SPRITE Botella 2.25L",
        precio: 25.40,
        stock: 6,
        imagen: "https://plazavea.vteximg.com.br/arquivos/ids/1854495-1000-1000/pack-whisky-old-times-blended-red-botella-750ml-gaseosa-guarana-botella-2l.jpg",
    },
    {
        id: 6,
        nombre: "PEPSI",
        descripcion: "Gaseosa PEPSI Botella 500ml Paquete 6un",
        precio: 9.90,
        stock: 8,
        imagen: "https://plazavea.vteximg.com.br/arquivos/ids/1034039-1000-1000/20109411.jpg",
    },
];


let  mainContenido = document.getElementById("contenido");
console.log("MAIN", mainContenido);

listaBebidas.forEach((bebida) => {

    let bebidasDom = document.createElement("div");
    
    bebidasDom.classList.add("tarjeta");
    bebidasDom.innerHTML = 
        `<div class="imagen">
            <img src="${bebida.imagen}" alt="${bebida.nombre}">
        </div>
        <div class="texto">
            <h4>${bebida.nombre}</h4>
            <p>${bebida.descripcion}</p>
            <div class="precio">
                <span>S/ ${bebida.precio}</span>
                <button class="btn-agregar" data-id="${bebida.id}">
                    Agregar
                </button>
            </div>
        </div>
        `;

    mainContenido.appendChild(bebidasDom)
});

let btnsAgrgegar = document.getElementsByClassName("btn-agregar");

let arrBtnsAgregar = Array.from(btnsAgrgegar);

let carrito = [];

arrBtnsAgregar.forEach((botonAgregar) => {
    botonAgregar.addEventListener("click", (evento) => {
        let btnId = botonAgregar.getAttribute("data-id");
        let bebidaIdentificada = buscarBebida(btnId);
        añadirACarrito(bebidaIdentificada);
        dibujarCarrito(carrito);
    })
});

const buscarBebida = (id) => {
    let idNumber = parseInt(id);

    let bebidaEncontrada = listaBebidas.find((bebida) => {
        return bebida.id === idNumber;
    });

    return bebidaEncontrada;
};

const añadirACarrito = (nuevaBebida) => {
    if (nuevaBebida.stock === 0) {
        alert ("Ya no hay stock!");
        return;
    }

    let existe = carrito.findIndex((bebida) => {
        return bebida.id === nuevaBebida.id;
    })

    console.log(existe);

    if (existe === -1) {
        nuevaBebida.cantidad = 1;
        carrito.push(nuevaBebida);
    }
    else {
        carrito[existe].cantidad++;
    }

    let indiceLista = listaBebidas.findIndex((items) => items.id === nuevaBebida.id);
    listaBebidas[indiceLista].stock--;
};

let tbodyCarrito = document.getElementById("tbody-carrito");
let tbodyResumen = document.getElementById("tbody-resumen");

const dibujarCarrito = (carritoActualizado) => {
    let trCarrito = "";

    carritoActualizado.forEach((item) => {
        trCarrito = 
            trCarrito + 
            `<tr>
                <td>${item.nombre}</td>
                <td>${item.cantidad}</td>
                <td>${item.precio}</td>
                <td>${item.precio * item.cantidad}</td>
            </tr>`;
    })
    
    tbodyCarrito.innerHTML = trCarrito;

    let total = 0;

    total = carritoActualizado.reduce((acumulador, bebida) => {
        return acumulador + bebida.precio * bebida.cantidad;
    }, 0);

    tbodyResumen.innerHTML = 
                            `<tr>
                                <td>TOTAL</td>
                                <td>${total}</td>
                            </tr>`;
};