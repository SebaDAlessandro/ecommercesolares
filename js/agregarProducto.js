import { productoServices } from "../service/producto-service.js"


const btnAgregarProducto = document.querySelector('#agregarProducto')

btnAgregarProducto.addEventListener('click', ()=>{
    const newProducto = tomarInputsNuevoProducto()
    let promo = false
    let precio = newProducto.precio
    let promoObjeto = {}
    if(newProducto.promo === true){
        promo = true
        promoObjeto = promoTrue(newProducto.precio)
    }
    if(newProducto.urlImagent === '' || newProducto.nombreProducto === '' || precio === '' || newProducto.descripcion === ''){
        swal("Oops!", "Complete todos los datos para continuar", "error");
    }else{
        productoServices.crearProducto(newProducto.urlImagent, newProducto.categoria, precio, promo, newProducto.nombreProducto,  newProducto.descripcion, promoObjeto).then((respuesta) =>{
                window.location.href = '../registroCompleto.html'
        }).catch(err=> console.log(err))            
    }
})

function tomarInputsNuevoProducto(){
    let promocion = document.querySelector('#promoInput').value
    let promo = false
    if(promocion.toLowerCase() === 'true'){  
        promo = true 
    }

    const nuevoProducto = {
        urlImagent: document.querySelector('#urlInput').value,
        categoria: document.querySelector('#categoriaInput').value,
        nombreProducto: document.querySelector('#nombreProductoInput').value,
        precio: parseFloat(document.querySelector('#precioInput').value),
        descripcion: document.querySelector('#descripcionInput').value,
        promo,
    }
    return nuevoProducto
}

function promoTrue(precio){
    const descuento = prompt('Ingrese el descuento a aplicar')
    const precioDescuento = parseFloat(precio - (precio*descuento/100))
    const promoObj ={
        precioDescuento,
        descuento
    }
    return promoObj
}

