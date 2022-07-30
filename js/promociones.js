import { productoServices } from '../service/producto-service.js'
import { formateandoPrecio } from '../service/formatearPesos.js';

const productosArray = []
productoServices.listaProductos().then((data)=>{
for (let i = 0; i < data.length; i++) {
    if(data[i].promo === true){
        productosArray.push({
            id: data[i].id,
            imagen: data[i].imagen,
            titulo: data[i].titulo,
            promo: data[i].promo,
            precioSugerido: data[i].precio,
            precioDescuento: data[i].descuento.precioDescuento,
            descuento: data[i].descuento.descuento
        })
}}

const seccionTarjetas = document.querySelector('#allProductos')

for (let i = 0; i < productosArray.length; i++) {
    const precioAnterior = formateandoPrecio(productosArray[i].precioSugerido)
    if(productosArray[i].promo){
        const precioDescuento = formateandoPrecio(productosArray[i].precioDescuento)
        var seccionDetalle =
        `<div class="producto__detalle-min" id="tarjeta">
        <img src="${productosArray[i].imagen}" alt="img del producto" class="prdoucto__img">
        <p class="promoProducto__titulo">${productosArray[i].titulo}</p>
        <p class="promoProducto__precio">${precioAnterior}</p>
        <p class="promoProducto__precioDescuento">${precioDescuento}</p>
        <p class="prmoProducto__descuento">${productosArray[i].descuento}% de descuento!</p>
        <a href="detalleProducto.html?id=${productosArray[i].id}" class="producto__link">Ver producto</a>
    </div>`
    }else{        
        var seccionDetalle =
        `<img src="${productosArray[i].imagen}" alt="img del producto" class="prdoucto__img">
        <p class="producto__titulo">${productosArray[i].titulo}</p>
        <p class="producto__precio">${precioSugerido}</p>
        <a href="detalleProducto.html?id=${productosArray[i].id}" class="producto__link">Ver producto</a>
    </div>`
    }
    
    const divTarjeta = seccionDetalle

    const tarjeta = document.createElement('div')
    tarjeta.innerHTML = divTarjeta
    tarjeta.id='tarjeta'
    seccionTarjetas.appendChild(tarjeta)

}
})
.catch((err) => alert("Ocurrió un error"));

