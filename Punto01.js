/* 1) Una persona necesita una muy simple calculadora que pueda dividir dos
números. */


function ingresarNum(_mensaje){
    return Number(prompt(_mensaje));
}

function validarNum(_num, _mensaje) {
    
    while (isNaN(_num) === true) {
        mostrarMensaje("Error! No se permiten letras y espacios");
        _num = ingresarNum(_mensaje);
    }
    return _num; 
}

function mostrarMensaje(_mensaje) {
    alert(_mensaje);
}

function dividir(_dividendo, _divisor){

    return (_dividendo / _divisor);
}

let dividendo = ingresarNum("Ingrese el número a dividir, por favor");
dividendo = validarNum(dividendo, "Ingrese el número a dividir nuevamente, por favor");

let divisor = ingresarNum("Ingrese el número por el que se dividira, por favor");
divisor = validarNum(divisor, "Ingrese el número por el que se dividira nuevamente, por favor");

if (divisor === 0) {

    mostrarMensaje("Error, No se puede dividir por cero!") 

} else{

    document.write(`Resultado: ${dividir(dividendo, divisor)}`);
}