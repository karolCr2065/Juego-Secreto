                         
let numeroSecreto = 0;
let intentos =0;
let listaNumerosSorteados = [];
let numeroMaximo =10

function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto;
return;
}
function verificarintento() {
    let numeroUsuario = parseInt(document.getElementById (`valorUsuario`).value);
    console.log (intentos);
    if(numeroSecreto===numeroUsuario) {
        asignarTextoElemento (`p`, `Acertaste el numero en ${intentos} ${(intentos === 1) ? `vez` : `veces` }`);
    document.getElementById (`reiniciar`).removeAttribute (`disabled`)
    } else {
        if(numeroUsuario<numeroSecreto){
            asignarTextoElemento (`p`, `El número es mayor`);
        } else {
            asignarTextoElemento (`p`, `El número es menor`);
        }
        intentos++;
        limpiarCaja()
    }
    
    return;
}
console.log (numeroSecreto);

function limpiarCaja () {
    let valorCaja = document.querySelector (`#valorUsuario`);
    valorCaja.value = ``;
   
    
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random ()*numeroMaximo)+1;
    
    console.log (numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numero
    if(listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento (`p`, `ya se sortearon todos los números pósibles`);
    } else {
    // si el numero generado esta incluido en la lista 
    if (listaNumerosSorteados.includes (numeroGenerado)) {
        return generarNumeroSecreto ();

    } else {
        listaNumerosSorteados.push (numeroGenerado);
        return numeroGenerado;

    } 
}
}
function condicionesIniciales () {
    asignarTextoElemento (`h1`, `Juego del número secreto!`);
    asignarTextoElemento (`p`, `indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego () {
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar el numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales ();
    //deshabilitar el boton de neuvo juego
    document.querySelector (`#reiniciar`).setAttribute (`disabled`, `true`);
}

condicionesIniciales ();



