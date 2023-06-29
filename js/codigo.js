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




/*


<script>

        window.onload = function() {

            var year = new Date().getFullYear();

            var yearOfBirth = parseInt(prompt("Ingrese su año de nacimiento:"));

            var age = year - yearOfBirth;

            var categoria;




            if (age >= 0 && age <= 12) {

                categoria = "niño";

            } else if (age >= 13 && age <= 22) {

                categoria = "adolescente";

            } else if (age >= 23 && age <= 64) {

                categoria = "adulto";

            } else {

                categoria = "adulto mayor";

            }




            var mensaje = "Usted tiene " + age + " años y es un " + categoria + ".";

            alert(mensaje);

        };

    </script>


    */