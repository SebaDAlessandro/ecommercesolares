import { productoServices } from '../service/producto-service.js' 

export function lamparas(){

    const lamparasArray = []
    productoServices.listaProductos().then((data)=>{
        for (let i = 0; i < data.length; i++) {
            if(data[i].categoria === 'lamparas'){
                lamparasArray.push({
                    id: data[i].id,
                    imagen: data[i].imagen,
                    titulo: data[i].titulo,
                    promo: data[i].promo,
                    precio: data[i].precio,
                })
        }
    }

        const seccionTarjetas = document.querySelector('#listaLamparas')
        let totalLength = 6
        if(lamparasArray.length<totalLength){
            totalLength = lamparasArray.length
        }
        for (let i = 0; i < totalLength; i++) {
            const divTarjeta = `<div class="producto__detalle-min" id="tarjeta">
            <img src="${lamparasArray[i].imagen}" alt="img del producto" class="prdoucto__img">
            <p class="producto__titulo">${lamparasArray[i].titulo}</p>
            <p class="producto__precio">$${lamparasArray[i].precio}</p>
            <a href="../detalleProducto.html?id=${lamparasArray[i].id}" class="producto__link">Ver producto</a>
            </div>`
            
            const tarjeta = document.createElement('div')
            tarjeta.innerHTML = divTarjeta
            seccionTarjetas.appendChild(tarjeta)
        }
    })
    .catch((err) => alert("Ocurrió un error"));
}
