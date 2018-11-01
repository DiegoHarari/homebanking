//Declaración de variables
let nombreUsuario = "John Snow";
let passwordIngresado = "";
let saldoCuenta = 10000;
let limiteExtraccion = 1500;
let saldoCuentaNuevo = 0;
let nuevaExtraccion = 0;
const agua = 350;
const luz = 210;
const internet = 570;
const telefono = 425;
const cuentasAmigas = {
    cuentaUno: 1234567,
    cuentaDos: 7654321,
};
const password = 8981;
const deudaTarjetas = {
    visa: 4000,
    visaMinimo: 1500,
    mastercard: 3000,
    mastercardoMinimo: 1000,
}

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = () => {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
    iniciarSesion();

}

// Cambiar limite de extraccion
const cambiarLimiteDeExtraccion = (limite) => {
    if (password === passwordIngresado) {
        limiteExtraccion = parseInt(prompt('Que monto de extraccion desea ingresar?'))
        if (!isNaN(limiteExtraccion)) {
            alert(`Has cambiado el limite de extraccion a $${limiteExtraccion}`)
            actualizarLimiteEnPantalla()
        } else if (isNaN(limiteExtraccion)) {
            alert('Por favor ingresa un numero valido.')
        }
    } else alert('Funcion no disponible')
}

// Extraer Dinero
const extraerDinero = () => {
    if (password === passwordIngresado) {
        nuevaExtraccion = parseInt(prompt('Que monto desea extraer?'))
        if (!isNaN(nuevaExtraccion)) {
            funcionParaExtraccion()
        } else if (isNaN(nuevaExtraccion)) {
            alert('Por favor ingresa un numero valido')
        }
    } else alert('Funcion no disponible')

}

//Depositar dinero
const depositarDinero = () => {
    if (passwordIngresado === password) {
        nuevoDeposito = parseInt(prompt('Que monto desea depositar?'))
        if (!isNaN(nuevoDeposito)) {
            saldoCuenta += nuevoDeposito
            actualizarSaldoEnPantalla()
            alert(`Has depositado : ${nuevoDeposito}, tu saldo era de: ${saldoCuenta - nuevoDeposito}, tu saldo actual es: ${saldoCuenta}`)
        } else if (isNaN(nuevoDeposito)) {
            alert('Por favor ingresa un numero valido')
        }
    } else {
        alert('Funcion no disponible')
    }
}

// Pagar servicios(funciones en functions.js)
const pagarServicio = () => {
    funcionPagarServicio()
}

// Funcion para transferir dinero(functions.js)
const transferirDinero = () => {
    funcionParaTransferencia()
}

// Inicio de sesion(functions.js)
const iniciarSesion = () => {
    functionInicioSesion()
};

const sumaDinero = (nuevoDeposito) => saldoCuenta += nuevoDeposito;
const restarDinero = (nuevaExtraccion) => saldoCuenta -= nuevaExtraccion;

// Extra Feature---
// Generador random de Token De Seguridad de 6 digitos+fecha valida para dicho token(functions.js) 

const tokenDeSeguridad = () => {
    if (passwordIngresado === password) {
        alert(Math.floor(Math.random() * 1000000))
        alert(`Este token te sirve solo para el ${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`)
    } else alert('Funcion no disponible')
}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
};

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
};

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
};


















