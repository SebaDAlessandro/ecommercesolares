import { productoServices } from '../service/producto-service.js' 

export function paneles(){

    const panelesArray = []
    productoServices.listaProductos().then((data)=>{
        for (let i = 0; i < data.paneles.length; i++) {
            panelesArray.push({
                id: data.paneles[i].id,
                imagen: data.paneles[i].imagen,
                titulo: data.paneles[i].titulo,
                promo: data.paneles[i].promo,
                precio: data.paneles[i].precio,
            })
        }

        const seccionTarjetas = document.querySelector('#listaPaneles')
        for (let i = 0; i < 6; i++) {
            const divTarjeta = `<div class="producto__detalle-min" id="tarjeta">
            <img src="${panelesArray[i].imagen}" alt="img del producto" class="prdoucto__img">
            <p class="producto__titulo">${panelesArray[i].titulo}</p>
            <p class="producto__precio">$${panelesArray[i].precio}</p>
            <a href="#" class="producto__link">Ver producto</a>
            </div>`
            
            const tarjeta = document.createElement('div')
            tarjeta.innerHTML = divTarjeta
            seccionTarjetas.appendChild(tarjeta)
        }
    })
    .catch((err) => alert("Ocurrió un error"));
}
