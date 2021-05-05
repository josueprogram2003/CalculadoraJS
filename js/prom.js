let operandoa;
let operandob;
let operacion;

function init() {
    //Variables

    let resultado = document.getElementById("resultado");
    let reset = document.getElementById("reset");
    let suma = document.getElementById("suma");
    let resta = document.getElementById("resta");
    let division = document.getElementById("division");
    let multiplicacion = document.getElementById("multiplicacion");
    let igual = document.getElementById("igual");
    let uno = document.getElementById("uno");
    let dos = document.getElementById("dos");
    let tres = document.getElementById("tres");
    let cuatro = document.getElementById("cuatro");
    let cinco = document.getElementById("cinco");
    let seis = document.getElementById("seis");
    let siete = document.getElementById("siete");
    let ocho = document.getElementById("ocho");
    let nueve = document.getElementById("nueve");
    let cero = document.getElementById("cero");
    // console.log(seis);

    uno.onclick = function(e){
        document.getElementById("resultado").value = document.getElementById("resultado").value + "1";
    }

    dos.onclick = function(e){
        document.getElementById("resultado").value = document.getElementById("resultado").value + "2";
    }

    tres.onclick = function(e){
        document.getElementById("resultado").value = document.getElementById("resultado").value + "3";;
    }
    cuatro.onclick = function(e){
        document.getElementById("resultado").value = document.getElementById("resultado").value+ "4";
    }
    cinco.onclick = function(e){
        document.getElementById("resultado").value = document.getElementById("resultado").value + "5";
    }
    seis.onclick = function(e){
        document.getElementById("resultado").value = document.getElementById("resultado").value + "6";
    }
    siete.onclick = function(e){
        document.getElementById("resultado").value = document.getElementById("resultado").value + "7";
    }
    ocho.onclick = function(e){
        document.getElementById("resultado").value = document.getElementById("resultado").value + "8";
    }
    nueve.onclick = function(e){
        document.getElementById("resultado").value = document.getElementById("resultado").value + "9";
    }
    cero.onclick = function(e){
        document.getElementById("resultado").value = document.getElementById("resultado").value + "0";
    }

    suma.onclick = function(e){
        operandoa = document.getElementById("resultado").value;
        operacion = "+";
        limpiar();
    }

    resta.onclick = function(e){
        operandoa = document.getElementById("resultado").value;
        operacion = "-";
        limpiar();
    }
    
    division.onclick = function(e){
        operandoa = document.getElementById("resultado").value;
        operacion = "/";
        limpiar();
    }

    multiplicacion.onclick = function(e){
        operandoa = document.getElementById("resultado").value;
        operacion = "*";
        limpiar();
    }

    reset.onclick = function(e){
        borrar();
    }


    igual.onclick = function(e){
        operandob= document.getElementById("resultado").value;
        resolver();
    }


    
    // alert("Hola mundo");
}
function borrar() {
    document.getElementById("resultado").value = "";
    operandoa=0;
    operandob=0;
    operacion="";
}

function limpiar() {
    document.getElementById("resultado").value = "";
}

function resolver() {
    let res = 0;
    switch (operacion) {
        case "+":
            res = parseFloat(operandoa) + parseFloat(operandob);
            break;
        case "-": 
            res = parseFloat(operandoa) - parseFloat(operandob);
            break;
        case "*":
            res = parseFloat(operandoa) * parseFloat(operandob);
            break;
        case "/":
            res = parseFloat(operandoa) / parseFloat(operandob);
        default:
            break;
    }
    borrar()
    document.getElementById("resultado").value=res;
}