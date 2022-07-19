import { insidePage } from "./inside.js"
import { agregar } from './agregarProducto.js'


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

    const propietario = {
        name: 'seba@seba',
        password: 'Abril2013'
    }
    if (propietario.name === usuario && propietario.password === contrasenia){
        insidePage ();
    }else{
        swal("Oops!", "El usuario o la contraseña son incorrectos", "error");
    }
}

const botonAgregarProducto = document.querySelector('#agregarProducto')

botonAgregarProducto.addEventListener('click', ()=>{
    
    const urlImagent = document.querySelector('#urlInput').value
    const categoria = document.querySelector('#categoriaInput').value
    const nombreProducto = document.querySelector('#nombreProductoInput').value
    const precio = document.querySelector('#precioInput').value
    const descripcion = document.querySelector('#descripcionInput').value

    agregar(urlImagent, categoria, nombreProducto, precio, descripcion)

})



