function Multiplos(){
    
    let cont = 1;
    while (cont <= 50){
        if (cont % 7 == 0 && cont % 2 != 0 && cont % 3 != 0 && cont % 5 != 0 ){
            console.log(cont);
        }
        cont = cont + 1;
    }
}