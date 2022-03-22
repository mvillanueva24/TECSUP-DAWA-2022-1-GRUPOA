function Mayor(){
    alert("Ingrese los 3 numeros:");
    let num1 = Number(prompt("Primer número"));
    let num2 = Number(prompt("Segundo número"));
    let num3 = Number(prompt("Tercer número"));
    if (num1 > num2 && num1 > num3) {
        console.log("El numero mayor es "+num1);
    }
    else if (num2 > num1 && num2 > num3) {
        console.log("El numero mayor es "+num2);
    }
    else if (num3 > num1 && num3 > num1) {
        console.log("El numero mayor es "+num3);
    }
}