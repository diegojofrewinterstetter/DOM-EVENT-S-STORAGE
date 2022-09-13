class Usuario{
    constructor(pin, contraseña){
        this.pin = pin
        this.contraseña = contraseña

    }
}

let usuarios = []
usuarios.push(new Usuario(7444,"aaa"))

const datos = document.querySelector("#datos")


function registrarUsuario(){

    usuarios.push(new Usuario(7424,"ava"))

    let pinx = datos.pin.value;
    let pins = datos.pin2.value
    let contraseñax = datos.contraseña.value 
    let contraseñas = datos.contraseña2.value
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
        
        usuarios.push(new Usuario(pinx,contraseñax))
        

}

function mostrarUsuarios(){

    usuarios.forEach((a) =>{

        console.log(a)
    })

    

}

