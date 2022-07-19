import { productoServices } from '../service/producto-service.js' 

export function lamparas(){

    const lamparasArray = []
    productoServices.listaProductos().then((data)=>{
        for (let i = 0; i < data.lamparas.length; i++) {
            lamparasArray.push({
                id: data.lamparas[i].id,
                imagen: data.lamparas[i].imagen,
                titulo: data.lamparas[i].titulo,
                promo: data.lamparas[i].promo,
                precio: data.lamparas[i].precio,
            })
        }

        const seccionTarjetas = document.querySelector('#listaLamparas')
        for (let i = 0; i < 6; i++) {
            const divTarjeta = `<div class="producto__detalle-min" id="tarjeta">
            <img src="${lamparasArray[i].imagen}" alt="img del producto" class="prdoucto__img">
            <p class="producto__titulo">${lamparasArray[i].titulo}</p>
            <p class="producto__precio">$${lamparasArray[i].precio}</p>
            <a href="#" class="producto__link">Ver producto</a>
            </div>`
            
            const tarjeta = document.createElement('div')
            tarjeta.innerHTML = divTarjeta
            seccionTarjetas.appendChild(tarjeta)
        }
    })
    .catch((err) => alert("Ocurrió un error"));
}
