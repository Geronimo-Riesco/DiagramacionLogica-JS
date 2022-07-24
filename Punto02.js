/* 2) Un bibliotecario desea un simple programa en el que ingrese el nombre y
el apellido de alguien por separado y lo muestre normalizado.
Normalizado significa que debería verse así: Apellido, Nombre. */


function ingresarCadena(_mensaje){
    return prompt(_mensaje);
}

function validarCadena(_cadena, _mensaje) {
    let expRegNombre = /^[a-zA-ZÀ-ÿ\u00f1\u00d1 ]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;

    while (expRegNombre.test(_cadena) === false) {
        mostrarMensaje("Error! No se permiten números y espacios");
        _cadena = ingresarCadena(_mensaje);
    }

    return _cadena; 
}

function mostrarMensaje(_mensaje) {
    alert(_mensaje);
}

let nombre = ingresarCadena("Ingrese su nombre, por favor");
nombre = validarCadena(nombre, "Ingrese su nombre nuevamente, por favor"); 

let apellido = ingresarCadena("Ingrese su apellido, por favor");
apellido = validarCadena(apellido, "Ingrese su apellido nuevamente, por favor");

document.write(`Nombre normalizado: ${apellido}, ${nombre}`);
