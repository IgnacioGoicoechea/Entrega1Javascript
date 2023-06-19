let saldo = 5000;


function finalizar() {
    alert("Fin del proceso")
}

function depositarDinero(deposito) {
    if (isNaN(deposito)) {
        alert("ingrese un monto valido");
    } else {
        saldo = saldo + deposito
        alert("operacion realizada su saldo actual es " + saldo)

    }
    seleccionarOperacion()

}

function consultarSaldo() {
    alert("Su saldo es: " + saldo);
    seleccionarOperacion()
}
function retirarDinero(monto) {
    if (isNaN(monto)) {
        alert("ingrese un monto valido");
    } else {
        if (monto > saldo) {
            alert("Saldo insuficiente")
        } else {
            saldo = saldo - monto
            //saldo -= monto
            alert("operacion realizada")
        }
    }
    seleccionarOperacion()
}


function seleccionarOperacion() {
    console.log("1: Retirar dinero");
    console.log("2: Consultar saldo");
    console.log("3: Depositar dinero");
    console.log("4: Salir");

    let op = prompt("Ingrese la opcion");

    switch (op) {
        case "1":
            let monto = Number(prompt("Monto a retirar"))
            retirarDinero(monto)
            break;
        case "2":
            consultarSaldo()
            break;
        case "3":
            let deposito = Number(prompt("Ingrese monto a depositar"))
            depositarDinero(deposito)
        case "4":
            finalizar()
            break;
        default:
            console.log("Operacion invalida")
            break
    }
}


function validarClave(clave) {
    if (clave === "1235") {

        seleccionarOperacion()
    } else {
        alert("clave incorrecta");
        finalizar()
    }

}


function ingresarClave(tarjeta) {
    if (tarjeta) {
        let clave = prompt("Ingresar Clave");
        validarClave(clave)

    } else {
        alert("Es necesario una tarjeta");
        IngresarTarjeta()
    }
}


function IngresarTarjeta() {
    let tarjeta = confirm("Ingrese tarjeta");
    ingresarClave(tarjeta)
}

IngresarTarjeta()