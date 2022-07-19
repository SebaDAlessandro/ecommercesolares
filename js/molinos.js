import { productoServices } from '../service/producto-service.js' 

export function molinos(){

    const molinosArray = []
    productoServices.listaProductos().then((data)=>{
        for (let i = 0; i < data.molinos.length; i++) {
            molinosArray.push({
                id: data.molinos[i].id,
                imagen: data.molinos[i].imagen,
                titulo: data.molinos[i].titulo,
                promo: data.molinos[i].promo,
                precio: data.molinos[i].precio,
            })
        }

        const seccionTarjetas = document.querySelector('#listaMolinos')
        for (let i = 0; i < 6; i++) {
            const divTarjeta = `<div class="producto__detalle-min" id="tarjeta">
            <img src="${molinosArray[i].imagen}" alt="img del producto" class="prdoucto__img">
            <p class="producto__titulo">${molinosArray[i].titulo}</p>
            <p class="producto__precio">$${molinosArray[i].precio}</p>
            <a href="#" class="producto__link">Ver producto</a>
            </div>`
            
            const tarjeta = document.createElement('div')
            tarjeta.innerHTML = divTarjeta
            seccionTarjetas.appendChild(tarjeta)
        }
    })
    .catch((err) => alert("Ocurrió un error"));
}
