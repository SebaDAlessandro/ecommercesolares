import { productoServices } from "../service/producto-service.js"

const url = new URL(window.location)
const id = url.searchParams.get('id')

if(id === null){
    alert('Error inesperado')
    window.location.href = '../allProductos.html'
}

const urlInput = document.querySelector('#urlInput')
const nombreProductoInput = document.querySelector('#nombreProductoInput')
const precioInput = document.querySelector('#precioInput')
const descripcionInput = document.querySelector('#descripcionInput')
const categoriaInput = document.querySelector('#categoriaInput')
const promoInput = document.querySelector('#promoInput')

productoServices.detalleProducto(id).then((producto) =>{
    urlInput.value = producto.imagen
    nombreProductoInput.value = producto.titulo
    precioInput.value = producto.precio
    descripcionInput.value = producto.descripcion
    categoriaInput.value = producto.categoria
    promoInput.value = producto.promo
})

const btnEditarProducto = document.querySelector('#editarProducto')

btnEditarProducto.addEventListener('click', ()=>{
    if(urlInput.value  === '' || nombreProductoInput.value === '' || precioInput.value === '' || descripcionInput.value === ''){
        swal("Oops!", "Complete todos los datos para continuar", "error");
    }else{
        productoServices.actualizarProducto(urlInput.value, categoriaInput.value, precioInput.value , promoInput.value, nombreProductoInput.value,  descripcionInput.value, id).then((respuesta) =>{
                window.location.href = '../registroCompleto.html'
        }).catch(err=> console.log(err))            
    }
})
