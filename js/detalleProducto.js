import { productoServices } from "../service/producto-service.js"

const detalleProductoContainer = document.querySelector('#detalleProducto__container')

/*
hay que agregar:
    que cuando se haga click en detalle del producto el mismo dirija a este archivo
    tiene que venir el num de id para utilizar la funcion productoServices.detalleProducto(id)
*/

const divProducto = `<div class="detalleProducto__producto">
<img src="./img/Paneles/Kit Energia Solar Multiuso Para Motorhome Camping Pesca 20w.webp" alt="imgaen del producto" class="detalleProducto__imagen">
</div>
<div class="detalleProducto__descripcion">
<p class="detalleProducto__titulo">Producto XYZ</p>
<p class="detalleProducto__precio">$300</p>
<p class="detalleProducto__texto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium itaque tempora consequuntur dolore blanditiis praesentium error alias aut temporibus qui nesciunt harum voluptatum soluta enim reiciendis ex nihil culpa consequatur laboriosam voluptatem accusamus, ut dicta? Quam deserunt quasi nihil tenetur, voluptatem ut alias? Pariatur consectetur quod ex voluptatibus, laudantium mollitia.
</p>
</div>`

const detalleContainer = document.createElement('div')
detalleContainer.innerHTML = divProducto
detalleProductoContainer.appendChild(detalleContainer)