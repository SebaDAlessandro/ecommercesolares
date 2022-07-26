import { productoServices } from '../service/producto-service.js'

const iconSearch = document.querySelector('#iconSearch')
const contenedorSearch = document.querySelector('#nav__busqueda-container')
const searchInput = document.querySelector('#searchInput')
const boxSearch = document.querySelector('#boxSearch')
const main = document.querySelector('#main')

function cargarProductos(){
    productoServices.listaProductos().then(respuesta =>{
    
        for (let i = 0; i < respuesta.length; i++) {
            console.log(respuesta[i].titulo)
            const liTag = `
                <a href="detalleProducto.html?id=${respuesta[i].id}" class="nav__producto-titulo">
                    <span class="material-symbols-outlined">search</span>
                    ${respuesta[i].titulo}
                </a>`
            const li = document.createElement('li')
            li.classList.add('nav__producto-encontrado')
            li.innerHTML = liTag
            boxSearch.appendChild(li)
        }
    })
}


iconSearch.addEventListener('click',(e)=>{
    e.preventDefault()
    cargarProductos()
    mostarBuscador()
})

main.addEventListener('click',()=>{
    ocultarBuscador()
})

function mostarBuscador(){
    contenedorSearch.classList.remove('off')
    contenedorSearch.classList.add('nav__busqueda-container')
    searchInput.focus()

    if(searchInput.value === ''){{
        boxSearch.style.display = 'none'
    }}
}

function ocultarBuscador(){
    contenedorSearch.classList.remove('nav__busqueda-container')
    contenedorSearch.classList.add('off')
    searchInput.value = ''
    boxSearch.style.display = 'none'

}

searchInput.addEventListener('keyup',(e)=>{
    e.preventDefault()
    buscarProductos()
} )

function buscarProductos(){
    let filter = searchInput.value.toUpperCase()
    const li = boxSearch.getElementsByTagName('li')

    for (let i = 0; i < li.length; i++) {
        const a = li[i].getElementsByTagName('a')[0];
        let textValue = a.textContent || a.innerText
        
        if(textValue.toUpperCase().indexOf(filter) > -1){
            li[i].style.display = ''
            boxSearch.style.display = 'block'

            if(searchInput.value === ''){{
                boxSearch.style.display = 'none'
            }}
        }else{
            li[i].style.display = 'none'
        }
    }
}

