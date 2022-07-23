/* 4) Una persona necesita calcular el área y el perímetro de una
circunferencia. Posee el radio de ls misma */

function ingresarNum(_mensaje){
    return Number(prompt(_mensaje));
}

function validarNum(_num, _mensaje) {
    
    while (_num <= 0 || isNaN(_num) === true) {
        mostrarMensaje("Error! No ingrese números negativos, ceros ni letras");
        _num = ingresarNum(_mensaje);
    }
    return _num; 
}

function mostrarMensaje(_mensaje) {
    alert(_mensaje);
}

function calcularPerimetro(_radio, _PI) {

    return (PI * _radio * 2);
}
 
function calcularArea(_radio, _PI) {

    return (PI * _radio * _radio);
}

const PI = 3.15;

let radio = ingresarNum("Ingrese el radio de la circunferencia, por favor");
radio = validarNum(radio, "Ingrese el radio de la circunferencia nuevamente, por favor");

document.write(`Perímetro: ${calcularPerimetro(radio, PI)}\n`);
document.write(`Área: ${calcularArea(radio, PI)}`);
