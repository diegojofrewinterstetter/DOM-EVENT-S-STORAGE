class Usuario{
    constructor(pin, contrasena){
        this.pin = pin
        this.contrasena = contrasena

    }
}

let usuarios = []
//usuarios.push(new Usuario(7444,"aaa"))


function registrarUsuario(event) {

    event.preventDefault();
    console.log(event);

    let formRegister = document.querySelector("#register")
    console.dir(formRegister)

    let pinx = formRegister[0].value
    let pins = formRegister[1].value
    let contraseñax = formRegister[2].value
    let contraseñas = formRegister[3].value
    let a=false
    let b=false
    
    
    
    do {

    if (pinx==pins) {

        a=true

    }else{
        
        a=true
        alert("Los valores no coinciden. Intente nuevamente")
        
    }   
        
    } while (a!=true);

    do {
    
        if (contraseñax==contraseñas) {
    
            b=true
    
        }else{
            
            b=true
            alert("Los valores no coinciden. Intente nuevamente2")
            
        }

    
        } while (b!=true);
        
        console.log(pinx)
        console.log(pins)
        console.log(contraseñas)
        console.log(contraseñax)

        if (pinx==pins && contraseñax==contraseñas) {
            
            usuarios.push(new Usuario(pinx, contraseñas))

        }

 }

function login(event){

    event.preventDefault();
    console.log(event);
    
    let formLogin = document.querySelector("#login")
    console.dir(formLogin)

    let pine = formLogin[0].value
    let password = formLogin[1].value
    let pinDB = " "
    let passwordDB = " "
    let k = 0

    // if (pine.) {
        
    // }


    for (let i = 0; i < usuarios.length; i++) {
        for (let j = 0; j < usuarios.length; j++) {

            if (usuarios[i].pin == pine && usuarios[j].contrasena == password) {
        
                pinDB = pine
                passwordDB = password

                console.log(pinDB)  
                console.log(passwordDB)
            }

            if(pinDB != " "){
                alert("lleno")
            }else{

                alert("Credenciales incorrectas")
            }

            
        }
        
    }



    // usuarios.forEach((a) =>{

    //     if(a.pin == pine && a.contrasena == password){

             
    //     }else
    //     alert("Pin o contraseña incorrectos")
    // })

}

function mostrarUsuarios(event){
    
    usuarios.forEach((a) =>{

        
        console.log(a)
    })

    

}

