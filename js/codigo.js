function calcularCategoria() {

    let anio = new Date().getFullYear();

    let anioNacimiento = parseInt(prompt("Ingrese su año de nacimiento:"));

    let edad = anio - anioNacimiento;

    let categoria;    

    if (edad >= 0 && edad <= 12) {

        categoria = "niño";

    } else if (edad >= 13 && edad <= 22) {

        categoria = "adolescente";

    } else if (edad >= 23 && edad <= 64) {

        categoria = "adulto";

    } else {

        categoria = "adulto mayor";

    }

    let mensaje = "Usted tiene " + edad + " años y es un " + categoria + ".";
    alert(mensaje);

}