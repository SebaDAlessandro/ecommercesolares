import { productoServices } from '../service/producto-service.js'

const productosArray = []
productoServices.listaProductos().then((data)=>{
for (let i = 0; i < data.length; i++) {   
    productosArray.push({
        id: data[i].id,
        imagen: data[i].imagen,
        titulo: data[i].titulo,
        promo: data[i].promo,
        precio: data[i].precio,
    })
}

const seccionTarjetas = document.querySelector('#allProductos')

for (let i = 0; i < productosArray.length; i++) {
    const divTarjeta = `
    <div class="producto__detalle-min" id="tarjeta">
        <div class="producto__detalle-min-opciones">
            <button class="producto__detalle-min-opciones-edit" id=${productosArray[i].id} data-edit><span class="material-symbols-outlined">edit</span></button>
            <button class="producto__detalle-min-opciones-delet" id=${productosArray[i].id} data-borrar><span class="material-symbols-outlined">delete</span></button>
        </div>
        <img src="${productosArray[i].imagen}" alt="img del producto" class="prdoucto__img">
        <p class="producto__titulo">${productosArray[i].titulo}</p>
        <p class="producto__precio">$${productosArray[i].precio}</p>
        <a href="#" class="producto__link">Ver producto</a>
    </div>`
    
    const tarjeta = document.createElement('div')
    tarjeta.innerHTML = divTarjeta
    tarjeta.id='tarjeta'
    seccionTarjetas.appendChild(tarjeta)

    const editBoton = tarjeta.querySelector('[data-edit]')
    editBoton.addEventListener('click',()=>{
        const id = editBoton.id
        productoServices.detalleProducto(id).then(respuesta =>{
            console.log(respuesta)
            window.location.href = `../editarProducto.html?id=${id}`
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
})
.catch((err) => alert("Ocurrió un error"));

const botonAgregarProducto = document.querySelector('#agregarProductos')

botonAgregarProducto.addEventListener('click', ()=>{
    window.location.href = '../agregarProducto.html'
})

const eliminarProducto = (id)=>{
    console.log('eliminando productos')
}


