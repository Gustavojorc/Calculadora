const pantalla = document.getElementById('pantalla');
let operacionActual = '';

function agregarValor(valor) {
    operacionActual += valor;
    pantalla.value = operacionActual;
}
