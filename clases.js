class Persona{

    constructor(nombre, apellido, edad){

        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;

        this.datos = `Mis datos son:  ${nombre} ${apellido} y tengo ${edad} años`;
    }

    saludar(){
        return `Hola, me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad}`;
    }

}

const alfonso = new Persona('Alfonso', 'Vacas', 41);
const pablo = new Persona('Pablo', 'Vacas', 65);

console.log(alfonso);
console.log(alfonso.saludar());

document.write(pablo.saludar());


