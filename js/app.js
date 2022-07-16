import { valida } from "./validaciones.js";
import { verficarPropietario } from "./login.js";

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