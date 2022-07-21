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
    const divTarjeta = `<div class="producto__detalle-min" id="tarjeta">
    <img src="${productosArray[i].imagen}" alt="img del producto" class="prdoucto__img">
    <p class="producto__titulo">${productosArray[i].titulo}</p>
    <p class="producto__precio">$${productosArray[i].precio}</p>
    <a href="#" class="producto__link">Ver producto</a>
    </div>`
    
    const tarjeta = document.createElement('div')
    tarjeta.innerHTML = divTarjeta
    seccionTarjetas.appendChild(tarjeta)
}
})
.catch((err) => alert("Ocurrió un error"));

const botonAgregarProducto = document.querySelector('#agregarProductos')

botonAgregarProducto.addEventListener('click', ()=>{
    window.location.href = '../agregarProducto.html'
})
