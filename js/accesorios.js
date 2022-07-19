import { productoServices } from '../service/producto-service.js' 

export function accesorios(){

    const accesoriosArray = []
    productoServices.listaProductos().then((data)=>{
        for (let i = 0; i < data.accesorios.length; i++) {
            accesoriosArray.push({
                id: data.accesorios[i].id,
                imagen: data.accesorios[i].imagen,
                titulo: data.accesorios[i].titulo,
                promo: data.accesorios[i].promo,
                precio: data.accesorios[i].precio,
            })
        }

        const seccionTarjetas = document.querySelector('#listaAccesorios')
        for (let i = 0; i < 6; i++) {
            const divTarjeta = `<div class="producto__detalle-min" id="tarjeta">
            <img src="${accesoriosArray[i].imagen}" alt="img del producto" class="prdoucto__img">
            <p class="producto__titulo">${accesoriosArray[i].titulo}</p>
            <p class="producto__precio">$${accesoriosArray[i].precio}</p>
            <a href="#" class="producto__link">Ver producto</a>
            </div>`
            
            const tarjeta = document.createElement('div')
            tarjeta.innerHTML = divTarjeta
            seccionTarjetas.appendChild(tarjeta)
        }
    })
    .catch((err) => alert("Ocurrió un error"));
}
