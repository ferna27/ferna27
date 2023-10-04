const calcular = document.getElementById('call');
const borrar = document.getElementById('ree')

function imc () {
    const nombres = document.getElementById('nombre').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if ( nombres !== '' && altura !== '' && peso !== '') {

        const valorIMC = (peso / (altura * altura));

        let classificado = '';

        if (valorIMC < 18.5){
            classificado = 'Ests bajo peso.';
        }else if (valorIMC < 25) {
            classificado = 'su peso es excelente';
        }else if (valorIMC < 30){
            classificado = 'no esta muy bien de peso.';
        }else if (valorIMC < 35){
            classificado = 'con obesidad.';
        }else if (valorIMC < 40){
            classificado = 'con obisidad le puede dar un paro.';
        }else {
            classificado = 'con obesidad grave esta en peligro ';
        }

        resultado.textContent = `${nombres} su IMC é ${valorIMC}  ${classificado}`;
        
    }else {
        resultado.textContent = 'llena todos los campo';
    }

}



function borra () {
    const nombres = document.getElementById('nombre').value = "";
    const altura = document.getElementById('altura').value = "";
    const peso = document.getElementById('peso').value = "";
    const resultado = document.getElementById('resultado').textContent = "";


}

call.addEventListener('click', imc);
ree.addEventListener('click',borra);
