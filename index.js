class Usuario{
    constructor(pin, contraseña){
        this.pin = pin
        this.contraseña = contraseña

    }
}

let usuarios = []

const datos = document.querySelector("#datos")


function registrarUsuario(){


    let pinx = datos.pin.value;
    let pins = datos.pin2.value
    let contraseñax = datos.contraseña.value 
    let contraseñas = datos.contraseña2.value
    let a=false
    let b=false
    let usuarios = []
    
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

        if (pinx == pins && contraseñax == contraseñas) {

            usuarios
             
        }




}