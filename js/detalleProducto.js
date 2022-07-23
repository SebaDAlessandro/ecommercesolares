import { productoServices } from "../service/producto-service.js"

const url = new URL(window.location)
const id = url.searchParams.get('id')

productoServices.detalleProducto(id).then(data =>{
    const divProducto = `<div class="detalleProducto__producto">
    <img src="${data.imagen}" alt="imgaen del producto" class="detalleProducto__imagen">
    </div>
    <div class="detalleProducto__descripcion">
    <p class="detalleProducto__titulo">${data.titulo}</p>
    <p class="detalleProducto__precio">$${data.precio}</p>
    <p class="detalleProducto__texto">${data.descripcion}</p>
    </div>`
    
    const detalleProductoContainer = document.querySelector('#detalleProducto__container')
    const detalleContainer = document.createElement('div')
    detalleContainer.innerHTML = divProducto
    detalleProductoContainer.appendChild(detalleContainer)

    cargarProductosCategoria(data.categoria)
})

function cargarProductosCategoria(categoria){
    const productosSimilaresDiv = document.querySelector('#productos__similares')
    productoServices.listaProductos().then(respuesta =>{
        for (let i = 0; i < respuesta.length; i++) {
            if(respuesta[i].categoria === categoria){
                const divSimilar =`<img src="${respuesta[i].imagen}" alt="img del producto" class="prdoucto__img">
                <p class="producto__titulo">${respuesta[i].titulo}</p>
                <p class="producto__precio">$${respuesta[i].precio}</p>
                <a href="../detalleProducto.html?id=${respuesta[i].id}" class="producto__link">Ver producto</a>`

                const tarjetaSimilar = document.createElement('div')
                tarjetaSimilar.classList.add('producto__detalle-min')
                tarjetaSimilar.id='producto__detalle-min'
                tarjetaSimilar.innerHTML = divSimilar
                productosSimilaresDiv.appendChild(tarjetaSimilar)
            }           
        }
    }).catch(err =>{
        alert('Error inesperado')
    })
}

