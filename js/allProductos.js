import { productoServices } from '../service/producto-service.js'
import { formateandoPrecio } from '../service/formatearPesos.js';

const productosArray = []
productoServices.listaProductos().then((data)=>{
    for (let i = 0; i < data.length; i++) {
        productosArray.push({
            id: data[i].id,
            imagen: data[i].imagen,
            titulo: data[i].titulo,
            promo: data[i].promo,
            precio: data[i].precio,
            descuento: data[i].descuento,
        })
    }

    productosArray.map(product =>{
        if (product.promo){
            const divTarjeta = crearSeccionPromo(product)
            crearSeccionBotones(divTarjeta)
        }else{
            const divTarjeta = crearSeccionSinPromo(product)
            crearSeccionBotones(divTarjeta)
        }       
    })
})
.catch((err) => alert("Ocurrió un error"));

const botonAgregarProducto = document.querySelector('#agregarProductos')

botonAgregarProducto.addEventListener('click', ()=>{
    window.location.href = 'agregarProducto.html'
})

function crearSeccionPromo(producto) {
    let precio = formateandoPrecio(producto.precio)
    let precioDesc = formateandoPrecio(producto.descuento.precioDescuento)
    
    const elementoDiv = `<div class="producto__detalle-min" id="tarjeta">
    <div class="producto__detalle-min-opciones">
        <button class="producto__detalle-min-opciones-edit" id=${producto.id} data-edit><span class="material-symbols-outlined">edit</span></button>
        <button class="producto__detalle-min-opciones-delet" id=${producto.id} data-borrar><span class="material-symbols-outlined">delete</span></button>
    </div>
    <img src="${producto.imagen}" alt="img del producto" class="prdoucto__img">
    <p class="producto__titulo">${producto.titulo}</p>
    <p class="producto__precio anterior">${precio}</p>
    <p class="producto__precio">${precioDesc}</p>
    <p class="producto__titulo-descuento">${producto.descuento.descuento}% de descuento!</p>
    <a href="../detalleProducto.html?id=${producto.id}" class="producto__link">Ver producto</a>
    </div>`

return elementoDiv
}

function crearSeccionSinPromo(producto){
    let precio = formateandoPrecio(producto.precio)

    const elementoDiv = `<div class="producto__detalle-min" id="tarjeta">
    <div class="producto__detalle-min-opciones">
        <button class="producto__detalle-min-opciones-edit" id=${producto.id} data-edit><span class="material-symbols-outlined">edit</span></button>
        <button class="producto__detalle-min-opciones-delet" id=${producto.id} data-borrar><span class="material-symbols-outlined">delete</span></button>
    </div>
    <img src="${producto.imagen}" alt="img del producto" class="prdoucto__img">
    <p class="producto__titulo">${producto.titulo}</p>
    <p class="producto__precio">${precio}</p>
    <a href="detalleProducto.html?id=${producto.id}" class="producto__link">Ver producto</a>
    </div>`
return elementoDiv
}

function crearSeccionBotones(tarjetaDiv){
    const seccionTarjetas = document.querySelector('#allProductos')
    const tarjeta = document.createElement('div')
    tarjeta.innerHTML = tarjetaDiv
    tarjeta.id='tarjeta'
    seccionTarjetas.appendChild(tarjeta)

    const editBoton = tarjeta.querySelector('[data-edit]')
    editBoton.addEventListener('click',()=>{
        const id = editBoton.id
        productoServices.detalleProducto(id).then(respuesta =>{
            console.log(respuesta)
            window.location.href = `../editarProducto.html?id=${id}`
        }).catch(err =>{
            console.log(err)
        })
    })

    const deletBoton = tarjeta.querySelector('[data-borrar]')
    deletBoton.addEventListener('click', ()=>{
        const id = deletBoton.id
        productoServices.eliminarProducto(id).then(respuesta =>{
            console.log(respuesta)
        }).catch(err =>{
            console.log(err)
        })
    })
}