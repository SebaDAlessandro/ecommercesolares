//BORRAR!!!!-----------------------------------------------------
export function insidePage(){

    const btnLogin = document.querySelector('#login')
    btnLogin.classList.remove('nav__interaccion-btn', 'boton')
    btnLogin.classList.add('off')

    const bienvenida = document.querySelector('#bienvenida')
    bienvenida.classList.remove('off')
    bienvenida.classList.add('input-mensage-bienvenida')

    const loginSection = document.querySelector('#loginSection')
    loginSection.classList.remove('login','container') 
    loginSection.classList.add('off')

    const allProductos = document.querySelector('#allProductosSection')
    allProductos.classList.remove('off')
    allProductos.classList.add('allProductos', 'container')

}
