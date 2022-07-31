import { personaServices } from "../service/persona-service.js"

export function verficarPropietario (){

    const productosSection = document.querySelector('#productosSection')
    productosSection.classList.remove('productos')
    productosSection.classList.remove('container')
    productosSection.classList.add('off')

    const promocionesSection = document.querySelector('#promocionesSection')
    promocionesSection.classList.remove('productos')
    promocionesSection.classList.remove('container')
    promocionesSection.classList.add('off')

    const loginSection = document.querySelector('#loginSection')
    loginSection.classList.remove('off')
    loginSection.classList.add('login','container')

}

const botonIngreso = document.querySelector('#ingresar')

botonIngreso.addEventListener('click', ()=>{

    const nameUsuario = document.querySelector('#usuario').value
    const contraseniaUsuario = document.querySelector('#contrasenia').value

    comporobarUsuario(nameUsuario, contraseniaUsuario)
})

function comporobarUsuario(usuario, contrasenia){
    
    personaServices.listaPersonas().then(data => {
        
        if (data[0].usuario === usuario && data[0].contraseña === contrasenia){
            window.location.href = './allProductos.html'
        }else{
            swal("Oops!", "El usuario o la contraseña son incorrectos", "error");
        }
    }) 
}




