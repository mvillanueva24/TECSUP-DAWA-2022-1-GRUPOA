function Comision(){
    const ventaT = Number(prompt("Ingrese la venta total"));
    var comision;
    if (ventaT <= 150){
        comision = 0;
    }
    else if (ventaT > 150 && ventaT <= 400){
        comision = ventaT * 0.1;
    }
    else{
        comision = 50 + (ventaT * 0.09); 
    }
    console.log(comision.toFixed(2));
}