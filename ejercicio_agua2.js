'use strict'

let parcial1 = 0;
let parcial2 = 0;
let parcial3 = 0;
let fijo = 0;

function calcularFactura(litros) {

    if (litros <= 50) {
        parcial1 = 0;
}
    if (litros > 50 && litros <= 200) {
        parcial2 = (litros - 50) * tarifa1; 
}
    if (litros > 200) {
        parcial3 = (150 * tarifa1) + (litros - 200) * tarifa2; 
}
    if ((parcial1 + parcial2 + parcial3) < 10) {
    fijo = minimoFactura - parcial2;
}
    let totalFactura = fijo + parcial1 + parcial2 + parcial3;
    return totalFactura;
}

let tarifa1 = 0.1;
let tarifa2 = 0.3;
let minimoFactura = 10;

let totalFactura = calcularFactura(500);
console.log(totalFactura);