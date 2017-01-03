var numeros = [0, -5, 18, 99, 3, 1];

//NEGATIVOS
document.getElementById("negativo").addEventListener("click", negativos);

function menorCero(numero) {
    return numero < 0;
}

function negativos() {
    document.getElementById("resultado").innerHTML = numeros.filter(menorCero);
}


//POSITIVOS
document.getElementById("positivo").addEventListener("click", positivos);

function mayorCero(numero) {
    return numero > 0;
}

function positivos() {
    document.getElementById("resultado").innerHTML = numeros.filter(mayorCero);
}


//MENOS SEIS
document.getElementById("menor").addEventListener("click", seis);

function menoresSeis(numero) {
    return numero <= 6;
}

function seis() {
    document.getElementById("resultado").innerHTML = numeros.filter(menoresSeis);
}


//PARES
document.getElementById("par").addEventListener("click", pares);

function par(numero) {
    return numero % 2 == 0;
}

function pares() {
    document.getElementById("resultado").innerHTML = numeros.filter(par);
}