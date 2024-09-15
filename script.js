const pantalla = document.getElementById('pantalla');
let operacionActual = '';

function agregarValor(valor) {
    operacionActual += valor;
    pantalla.value = operacionActual;
}

const botones = document.querySelectorAll('button');
botones.forEach(boton => {
    boton.addEventListener('click', function() {
        const valor = this.textContent;

        if (valor === 'c') {
            operacionActual = '';
            pantalla.value = '';
        } else if (valor === '=') {
            try {
                pantalla.value = eval(operacionActual);
                operacionActual = '';
            } catch (e) {
                pantalla.value = 'error';
            }
        } else {
            agregarValor(valor);
        }
    });
});
