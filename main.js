let cantidad = document.getElementById('cantidad')
let boton  = document.getElementById('generar')
let contraseña = document.getElementById('contrasena')
let mensaje = document.getElementById('mensaje');


const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()'
const cadenaNumeros = /[0123456789]/
const cadenaSimbolos = /[!@#$%^&*()]/
const cadenaMayusculas = /[ABCDEFGHIJKLMNOPQRSTUVWXYZ]/


function generar(){
    let numeroDigitado= parseInt (cantidad.value)

    if( numeroDigitado < 8){
        alert("Por seguridad, debes ingresar una cantidad mayor a 8")
        return;
    }

    let contraseña = ""

    for(let i = 0; i < numeroDigitado; i++){
        let aleatorio = cadenaCaracteres [Math.floor(Math.random() * cadenaCaracteres.length)]

        contraseña += aleatorio 


        if (cadenaNumeros.test(contraseña)){
            mensaje.textContent = "La contraseña generada es fuerte"
        } else if (cadenaSimbolos.test(contraseña)){
            mensaje.textContent = "La contraseña generada es fuerte"
        } else if ( cadenaMayusculas.test(contraseña)){
            mensaje.textContent = "La contraseña generada es fuerte"
        } else {
            mensaje.textContent = "La contraseña generada es débil, intente nuevamente"
        }
    }
    contrasena.value= contraseña

}

function limpiar(){
    contrasena.value = ""
}







