/*Switch de sintaxis simple*/
let valor = 1;

switch(valor){
    case 1:
        document.write("El valor es uno")
        break;
    case 2:
        document.write("EL valor es dos");
        break;
    case 3:
        document.write("El valor es tres");
        break;
    default:
        document.write("Valor inexistente");
        break;

}

/*Switch de sintaxis multiple*/
let valor2 = 2;

switch(valor2){
    case 1:
    case 3:
    case 5:
        document.write("El valor es impar");
        break;
    case 2:
    case 4:
        document.write("El valor es par");
        break;
}
