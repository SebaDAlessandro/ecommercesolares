import { productoServices } from '../service/producto-service.js' 
import { formateandoPrecio } from '../service/formatearPesos.js';

export function accesorios(){

    const accesoriosArray = []
    productoServices.listaProductos().then((data)=>{
        for (let i = 0; i < data.length; i++) {
            if(data[i].categoria === 'accesorios' && !data[i].promo){
                accesoriosArray.push({
                    id: data[i].id,
                    imagen: data[i].imagen,
                    titulo: data[i].titulo,
                    promo: data[i].promo,
                    precio: data[i].precio,
                })
            }
        }

    const seccionTarjetas = document.querySelector('#listaAccesorios')
    let totalLength = 6
    if(accesoriosArray.length<totalLength){
        totalLength = accesoriosArray.length
    }
    for (let i = 0; i < totalLength; i++) {

        let precio = formateandoPrecio(accesoriosArray[i].precio)

        const divTarjeta = `<div class="producto__detalle-min" id="tarjeta">
        <img src="${accesoriosArray[i].imagen}" alt="img del producto" class="prdoucto__img">
        <p class="producto__titulo">${accesoriosArray[i].titulo}</p>
        <p class="producto__precio">${precio}</p>
        <a href="detalleProducto.html?id=${accesoriosArray[i].id}" class="producto__link">Ver producto</a>
        </div>`
        
        const tarjeta = document.createElement('div')
        tarjeta.innerHTML = divTarjeta
        seccionTarjetas.appendChild(tarjeta)
    }
    })
    .catch((err) => alert("Ocurrió un error"));
}
