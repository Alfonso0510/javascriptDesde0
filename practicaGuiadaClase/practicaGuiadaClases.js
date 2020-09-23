/*Crear una clase libro
La clase libro tendra titulo, autor, año y genero
Crear un metodo que devuelva toda la informacion del libro
Pedir 3 libros y guardarlos en un array
Los libros se introduciran al arrancar el programa pidiendo los datos con prompt
Validad que los campos no se introduzcan vacios
Validar que el año sea un numero y que tenga 4 digitos
Validar que el genero sea: aventuras, terror o fantasia
Crear una funcion que muestre todos los libros
Crear una funcion que muestre los autores ordenados alfabeticamente
Crear una funcion que pida un genero y muestre la información de los libros que pertenezcan
a ese genero usando el metodo que devuelve la informacion
*/

class Libro{

    constructor(titulo, autor, año, genero){
        this.titulo = titulo;
        this.autor = autor;
        this.año = año;
        this.genero = genero;
    }

    getTitulo(){
        return this.titulo;
    }

    getAutor(){
        return this.autor;
    }

    getGenero(){
        return this.genero;
    }

    getAño(){
        return this.año;
    }
    
    informacionLibro(){
        return `Titulo: ${this.titulo} Autor: ${this.autor} 
        año de edicion: ${this.año} genero al que pertenece ${this.genero}`;
    }

}

let libros = [];

while (libros.length<3){
    let titulo = prompt('Introduce el titulo del libro');
    let autor = prompt('Introduce el autor del libro');
    let año = prompt('Introduce el año de edicion');
    let genero = prompt('Introduce el genero del libro').toLowerCase();

    if(titulo !='' && 
       autor !='' && 
       !isNaN(año) && 
       año.length==4 
       && (genero=='aventura' || genero=='terror' || genero=='fantasia')){

       libros.push( new Libro(titulo, autor, año, genero));

    }
}

const mostarTodosLibros = () => {
    console.log(libros);
}

const mostarAutores = () => {
    let autores = [];

    for(libro of libros){
        autores.push(libro.getAutor());
    }

    console.log(autores.sort());
}

const pedirGenero= () => {
    const genero = prompt('Introduce el genero a buscar');
    
    for (const libro of libros){
        if(libro.getGenero() == genero){
            console.log(libro.informacionLibro());
        }
    }

}

//mostarTodosLibros();
//mostarAutores();
//pedirGenero();