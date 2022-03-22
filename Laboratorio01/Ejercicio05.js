function ArregloIzquierda(){
    
    const cant = Number(prompt("Cantidad de datos del array"));

    let array = []

    for (let i = 0; i < cant; i++) {
        array.push(Number(prompt("Numero " + (i+1))))
    }

    const Desplazamiento = Number(prompt("Cantidad de desplazamientos: "));
    
    
    for (var i = 0; i < Desplazamiento; i++){
        var ultimo = array.shift();
        array.push(ultimo)
    }
    console.log(array)
}