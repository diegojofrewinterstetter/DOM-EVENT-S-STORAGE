class Usuario {
    constructor(pin, contrasena) {
        this.pin = pin
        this.contrasena = contrasena

    }
}

let usuarios = []

let submitRegister = document.querySelector("#submitRegister")
submitRegister.addEventListener("click", registrarUsuario)

function registrarUsuario(event) {

    sessionStorage.removeItem(0 )
    event.preventDefault();
    console.log(event);

    let formRegister = document.querySelector("#register")
    console.dir(formRegister)

    let pinx = formRegister[0].value
    let pins = formRegister[1].value
    let contraseñax = formRegister[2].value
    let contraseñas = formRegister[3].value
    let a = false
    let b = false

    do {

        (pinx == pins) ? a=true : alert("Los valores no coinciden. Intente nuevamente"), a = true

    } while (a != true);

    do {

        (contraseñax == contraseñas) ? b = true : alert("Los valores no coinciden. Intente nuevamente2"), b = true

    } while (b != true);

    console.log(pinx)
    console.log(pins)
    console.log(contraseñas)
    console.log(contraseñax)

    if (pinx == pins && contraseñax == contraseñas) {

        usuarios.push(new Usuario(pinx, contraseñas))

    }

    const token = generarToken(pinx, contraseñax)
    sessionStorage.setItem("token", token)

    //Prueba fallida de querer ocultar contenido. No ingresa al if. 

    const autenticado = existToken()
    if (autenticado && pinx == pins && contraseñax == contraseñas) {
        console.log("entre")
        formRegister.className = "oculto"
        let visibleh2 = document.querySelector("#registerh2")
        visibleh2.className = "oculto"
    }
}

function generarToken(pin, contrasena) {
    return pin + contrasena
}

function existToken() {

    if (sessionStorage.getItem("token") !== null) {
        return true
    } else {
        return false
    }
}




let submitLogin = document.querySelector("#submitLogin")
submitLogin.addEventListener("click", login)
function login(event) {

    event.preventDefault();
    console.log(event);

    let formLogin = document.querySelector("#login")
    console.dir(formLogin)

    let pine = formLogin[0].value
    let password = formLogin[1].value
    let pinDB = " "
    let passwordDB = " "

    console.log(usuarios)

    if (usuarios.indexOf(pine) && usuarios.indexOf(password)) {
        console.log(usuarios)
        pinDB = pine
        passwordDB = password

        console.log(pinDB)
        console.log(passwordDB)
    }
    
    if (usuarios.includes(pinDB) || usuarios.includes(passwordDB)) alert("Credenciales incorrectas")
    if (pinDB.trim() && passwordDB.trim()) alert("¡Se ha logeado con éxito!")
    else alert("Credenciales incorrectas")

    


}

let ver = document.querySelector("#ver")
ver.addEventListener("click", mostrarUsuarios)
function mostrarUsuarios(event) {

    event.preventDefault()

    usuarios.forEach((a) => {


        console.log(a)
    })



}

