const funcionPagarServicio = () => {
    if (password === passwordIngresado) {
        alert('Ingresa el numero de servicio que deseas pagar');
        const eleccionServicio = parseInt(prompt(" 1. Agua \n 2. Luz \n 3. Telefono \n 4. Internet"));
        switch (eleccionServicio) {
            case 1:
                if (agua <= saldoCuenta) {
                    saldoCuenta -= agua
                    alert(`Has pagado el servicio Agua. Se te descontaron $${agua},\ntu saldo anterior era $${saldoCuenta + agua} tu saldo actual es $${saldoCuenta}`)
                    actualizarSaldoEnPantalla()
                } else {
                    alert(`No hay suficiente saldo en tu cuenta para pagar este servicio.`);
                }
                break;
            case 2:
                if (luz <= saldoCuenta) {
                    saldoCuenta -= luz
                    alert(`Has pagado el servicio Luz. Se te descontaron $${luz},\ntu saldo anterior era $${saldoCuenta + luz} tu saldo actual es $${saldoCuenta}`)
                    actualizarSaldoEnPantalla()
                } else {
                    alert(`No hay suficiente saldo en tu cuenta para pagar este servicio.`);
                }
                break;
            case 3:
                if (telefono <= saldoCuenta) {
                    saldoCuenta -= telefono
                    alert(`Has pagado el servicio Telefono. Se te descontaron $${telefono},\ntu saldo anterior era $${saldoCuenta + telefono} tu saldo actual es $${saldoCuenta}`)
                    actualizarSaldoEnPantalla()
                } else {
                    alert(`No hay suficiente saldo en tu cuenta para pagar este servicio.`);
                }
                break;
            case 4:
                if (internet <= saldoCuenta) {
                    saldoCuenta -= internet
                    alert(`Has pagado el servicio Internet. Se te descontaron $${internet},\ntu saldo anterior era $${saldoCuenta + internet} tu saldo actual es $${saldoCuenta}`)
                    actualizarSaldoEnPantalla()
                } else {
                    alert(`No hay suficiente saldo en tu cuenta para pagar este servicio.`);
                }
                break;
            default:
                alert(`Por favor seleccione un numero valido`)
        }
    } else alert('Funcion no disponible')
}

const funcionParaTransferencia = () => {
    if (password === passwordIngresado) {
        let transferencia = prompt(`Que monto desea transferir?`)
        transferencia = parseInt(transferencia)
        if (transferencia <= saldoCuenta) {
            let ingresoCuentaTransferUsuario = prompt(`Por favor ingresa el numero de cuenta para realizar la transferencia`)
            ingresoCuentaTransferUsuario = parseInt(ingresoCuentaTransferUsuario)
            if (ingresoCuentaTransferUsuario === cuentasAmigas.cuentaUno || ingresoCuentaTransferUsuario === cuentasAmigas.cuentaDos) {
                alert(`Se han transferido $${transferencia} a la cuenta ${ingresoCuentaTransferUsuario}`)
                saldoCuenta -= transferencia
                actualizarSaldoEnPantalla()
            } else {
                alert(`Solo puedes transferir dinero a cuentas amigas, la cuenta nro. ${ingresoCuentaTransferUsuario}, no es una cuenta amiga.`)
            }
        } else {
            alert('No tienes dinero suficiente para hacer la transferencia solicitada.')
        }
    } else alert('Funcion no disponible')
}

const functionInicioSesion = () => {
    passwordIngresado = parseInt(prompt('Por favor ingresa tu password'))
    if (passwordIngresado === password) {
        alert('Bienvenido John Snow, ya puedes comenzar a realizar operaciones.')
    } else {
        alert('El codigo es incorrecto tu saldo ha sido retenido.')
        saldoCuenta = 0;
        limiteExtraccion = 0
        document.querySelector(".green-container").style.background = "red"
        actualizarSaldoEnPantalla()
        actualizarLimiteEnPantalla()
    }
}

const funcionParaExtraccion = () => {
    if (nuevaExtraccion <= saldoCuenta && nuevaExtraccion <= limiteExtraccion && nuevaExtraccion % 100 === 0) {
        saldoCuenta -= nuevaExtraccion
        actualizarSaldoEnPantalla()
        alert(`Has extraido : $${nuevaExtraccion}, tu saldo es de: $${saldoCuenta}, tu saldo era : $${saldoCuenta + nuevaExtraccion}`)
    } else if (nuevaExtraccion > saldoCuenta || nuevaExtraccion > limiteExtraccion) {
        alert(`No puedes extraer esa cantidad de dinero, el limite de extraccion es $${limiteExtraccion}`)
    }
    else if (nuevaExtraccion % 100 !== 0) {
        alert('Este cajero solo da billetes de 100, disculpe las molestias.')
    }
}











