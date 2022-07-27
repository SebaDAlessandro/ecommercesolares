import { productoServices } from '../service/producto-service.js' 
import { formateandoPrecio } from '../service/formatearPesos.js';

export function paneles(){

    const panelesArray = []
    productoServices.listaProductos().then((data)=>{
        for (let i = 0; i < data.length; i++) {
            if(data[i].categoria === 'paneles' && !data[i].promo){
                panelesArray.push({
                    id: data[i].id,
                    imagen: data[i].imagen,
                    titulo: data[i].titulo,
                    promo: data[i].promo,
                    precio: data[i].precio,
                })
            }
        }

    const seccionTarjetas = document.querySelector('#listaPaneles')
    let totalLength = 6
    if(panelesArray.length<totalLength){
        totalLength = panelesArray.length
    }
    for (let i = 0; i < totalLength; i++) {
        const precio = formateandoPrecio(panelesArray[i].precio)
        const divTarjeta = `<div class="producto__detalle-min" id="tarjeta">
        <img src="${panelesArray[i].imagen}" alt="img del producto" class="prdoucto__img">
        <p class="producto__titulo">${panelesArray[i].titulo}</p>
        <p class="producto__precio">${precio}</p>
        <a href="../detalleProducto.html?id=${panelesArray[i].id}" class="producto__link">Ver producto</a>
        </div>`
        
        const tarjeta = document.createElement('div')
        tarjeta.innerHTML = divTarjeta
        seccionTarjetas.appendChild(tarjeta)
    }
    })
    .catch((err) => alert("Ocurrió un error"));
}
