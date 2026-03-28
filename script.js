function agregar(valor) {
    document.getElementById("pantalla").value += valor;
}

function limpiar() {
    document.getElementById("pantalla").value = "";
}

function calcular() {
    let expresion = document.getElementById("pantalla").value;

    try {
        let resultado = eval(expresion);
        alert("Resultado: " + resultado);
        document.getElementById("pantalla").value = resultado;
    } catch {
        alert("Error en la operación");
    }
}
