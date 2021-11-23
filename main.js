// var para html
var contenidoHtml =
    '<h3>Ataque a la vida:<h3>' +
    '<input type="button" value="50" onclick="ataque(50)">' +
    '<input type="button" value="30" onclick="ataque(30)">' +
    '<input type="button" value="10" onclick="ataque(10)">' +

    '<h4>Ataque al poder:</h4>' +
    '<input type="button" value="100" onclick="ataquePoder(100)">' +
    '<input type="button" value="50" onclick="ataquePoder(50)">' +

    '<h5>Pociones:  </h5>' +
    '<input type="button" value="50" onclick="regeneradorPociones(50)">' + // me apoyo de parámetros para simplificar código
    '<input type="button" value="30" onclick="regeneradorPociones(30)">' +
    '<input type="button" value="10" onclick="regeneradorPociones(10)">' +
    '<br><br><br>' +
    '<input type="Reset" value="Reset" onclick="resetJuego()" class="boton_personalizado" >';

var muerto =
    '<h3>Juego terminado</h3>' +
    '<input type="button" value="Volver a jugar" onclick="volverJuego()">' +
    '<input type="button" value="Salir" onclick="salirJuego()">';

var startAgain =
    '<div id="comienzaJuego">' +
    '<h1>Introduce nombre jugador</h1>' +
    '<input type="text" placeholder="Tu nickname" id="apodo" >' +
    '<input type="button" value="Aceptar" onclick="juegoInicio()">' +
    '</div>';

var vidaMax = 100;
var poderMax = 100;

var jugador = {
    nickName: "",
    vida: vidaMax,
    poder: poderMax
}

// en formulario sólo utilzo .value
// es una función para validar el texto colocado
function juegoInicio() {

    // pregunto si el id es de formulario mas si su longitud es 0, lanza... 
    if (apodo.value.length == 0) { // para validar el tema del alerta y completado, analizo si el escrito es 0 o nulo, para lanzar alerta
        alert("Introduce un nickName. Gracias!");
    } else {
        jugador.nickName = apodo.value; // uso el id del cuadro + value, para que me lo escriba, sin eso no escribe nada!
        document.getElementById("comienzaJuego").innerHTML = "";
        document.getElementById("apodo1").innerHTML = "Jugador: " + " " + jugador.nickName;
        document.getElementById("vida").innerHTML = "Vida: " + "" + jugador.vida;
        document.getElementById("poder").innerHTML = "Poder: " + "" + jugador.poder;
        document.getElementById("controlesJuego").innerHTML = contenidoHtml;
    }

}

function volverJuego() {

    document.getElementById("apodo1").innerHTML = "Jugador: " + " " + jugador.nickName;
    document.getElementById("vida").innerHTML = "Vida: " + "" + jugador.vida;
    document.getElementById("poder").innerHTML = "Poder: " + "" + jugador.poder;
    document.getElementById("controlesJuego").innerHTML = contenidoHtml;
}

function ataque(valorAtaque) {
    if (jugador.vida !== 0) {
        if (jugador.vida > valorAtaque) {
            jugador.vida = jugador.vida - valorAtaque;
            document.getElementById("vida").innerHTML = "Vida: " + jugador.vida;
        } else {
            jugador.vida = 0;
            document.getElementById("vida").innerHTML = "Vida:" + jugador.vida;
            document.getElementById("controlesJuego").innerHTML = muerto;
        }
    } else {
        alert("El jugador ya no tiene vida, inténtalo de nuevo y utiliza una poción.");
        document.getElementById("controlesJuego").innerHTML = muerto;
    }
}

function ataquePoder(valorAtaquePoder) {
    if (jugador.poder !== 0) {
        if (jugador.poder > valorAtaquePoder) {
            jugador.poder = jugador.poder - valorAtaquePoder;
            document.getElementById("poder").innerHTML = "Poder: " + jugador.poder;
        } else {
            jugador.poder = 0;
            document.getElementById("poder").innerHTML = "Poder:" + jugador.poder;
        }
    } else {
        alert("El jugador ya no tiene poder, prueba utilizar una poción.");
    }
}

function regeneradorPociones(valorRegenera) { // uso parámetros y reduzco código

    if ((jugador.vida + valorRegenera) > 100) { // utilizo vida + el parámetro en if MIRA!!
        jugador.vida = 100; //LLAMO ASÍ , para que no me de más de 100 y ahí pare
        document.getElementById("vida").innerHTML = "Vida : " + jugador.vida;
        // le tengo que poner el docuemnt para qye me llamo muestre
    } else {
        jugador.vida = jugador.vida + valorRegenera;
        document.getElementById("vida").innerHTML = "Vida : " + jugador.vida;
    }
    if ((jugador.poder + valorRegenera) > 100) {
        jugador.poder = 100;
        document.getElementById("poder").innerHTML = "Poder : " + jugador.poder;
    } else {
        jugador.poder = jugador.poder + valorRegenera;
        document.getElementById("poder").innerHTML = "Poder : " + jugador.poder;
    }
}

function salirJuego() {
    jugador.nickName = "";
    jugador.vida = vidaMax;
    jugador.poder = poderMax;
    //Reiniciamos etiquetas en el html
    document.getElementById("comienzaJuego").innerHTML = startAgain;
    document.getElementById("apodo").innerHtml = "";
    document.getElementById("apodo1").innerHTML = "";
    document.getElementById("vida").innerHTML = "";
    document.getElementById("poder").innerHTML = "";
    document.getElementById("controlesJuego").innerHTML = "";
}

function resetJuego() {
    jugador.vida = vidaMax;
    jugador.poder = poderMax;
    document.getElementById("vida").innerHTML = "Vida: " + jugador.vida;
    document.getElementById("poder").innerHTML = "Poder: " + jugador.poder;
}