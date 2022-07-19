import { valida } from "./validaciones.js";
import { verficarPropietario } from "./login.js";
import { paneles } from "./paneles.js";
import { lamparas } from "./lamparas.js";
import { molinos } from "./molinos.js";
import { accesorios } from "./accesorios.js";


paneles()
lamparas()
molinos()
accesorios()

const inputs = document.querySelectorAll('input')

inputs.forEach(input =>{
    input.addEventListener('blur', (input)=>{
        valida(input.target)
    })
})

const btnLogin = document.querySelector('#login')

btnLogin.addEventListener('click', ()=>{
    verficarPropietario()
})
