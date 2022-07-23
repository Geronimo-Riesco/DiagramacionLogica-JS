/* 3) Un chico necesita calcular el área y el perímetro de cualquier rectángulo.
Para ello cuenta con el ancho y el alto del mismo. */


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

function calcularPerimetro(_base, _altura){

    return ((_base * 2) + (_altura * 2));
}

function calcularArea(_base, _altura){

    return (_base * _altura);
}

let base = ingresarNum("Ingrese la base del rectángulo, por favor");
base = validarNum(base, "Ingrese la base del rectángulo nuevamente, por favor");

let altura = ingresarNum("Ingrese la altura del rectángulo, por favor");
altura = validarNum(altura, "Ingrese la altura del rectángulo nuevamente, por favor");

document.write(`Perímetro: ${calcularPerimetro(base, altura)}\n`);
document.write(`Área: ${calcularArea(base, altura)}`);

