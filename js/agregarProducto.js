import { productoServices } from "../service/producto-service.js"


const btnAgregarProducto = document.querySelector('#agregarProducto')

btnAgregarProducto.addEventListener('click', ()=>{
    const newProducto = tomarInputsNuevoProducto()
    let promo = false
    if(newProducto.promo === 'true'){
        promo = true
    }
    if(newProducto.urlImagent === '' || newProducto.nombreProducto === '' || newProducto.precio === '' || newProducto.descripcion === ''){
        swal("Oops!", "Complete todos los datos para continuar", "error");
    }else{
        productoServices.crearProducto(newProducto.urlImagent, newProducto.categoria, newProducto.precio, promo, newProducto.nombreProducto,  newProducto.descripcion).then((respuesta) =>{
                window.location.href = '../registroCompleto.html'
        }).catch(err=> console.log(err))            
    }
})

function tomarInputsNuevoProducto(){
    const nuevoProducto = {
        urlImagent: document.querySelector('#urlInput').value,
        categoria: document.querySelector('#categoriaInput').value,
        nombreProducto: document.querySelector('#nombreProductoInput').value,
        precio: document.querySelector('#precioInput').value,
        descripcion: document.querySelector('#descripcionInput').value,
        promo: document.querySelector('#promoInput').value
    }
    return nuevoProducto
}

