//https://ecommersolares.herokuapp.com/
//http://localhost:3000

const listaProductos = ()=> fetch("https://ecommersolares.herokuapp.com/productos").then((respuesta)=> respuesta.json())

const crearProducto = (imagen, categoria, precio, promo, titulo, descripcion,descuento)=> {
    return fetch(`https://ecommersolares.herokuapp.com/productos/`,{
        method: 'POST',
        headers:{
            'Content-type':'application/json'//para que sepa que tipo de informacion estamos enviando
        },
        body:JSON.stringify({imagen, categoria, precio, promo, titulo, descripcion, descuento,id: uuid.v4()}) //stringify: convierte texto a http para poder enviar la informacion
    })
}

const eliminarProducto = (id)=>{
    return fetch(`https://ecommersolares.herokuapp.com/productos/${id}`,{
        method: 'DELETE'
    })
}

const detalleProducto = (id)=>fetch(`https://ecommersolares.herokuapp.com/productos/${id}`).then((respuesta)=> respuesta.json())

const actualizarProducto = (imagen, categoria, precio, promo, titulo, descripcion, descuento,id)=>{
    return fetch(`https://ecommersolares.herokuapp.com/productos/${id}`,{
        method: 'PUT',
        headers:{
            'Content-type':'application/json'
        },
        body: JSON.stringify({imagen, categoria, precio, promo, titulo, descripcion, descuento})
    }).then(respuesta =>{
        console.log(respuesta)
    }).catch(err =>{
        console.log(err)
    })
}

export const productoServices = {
    listaProductos,
    crearProducto,
    eliminarProducto,
    detalleProducto,
    actualizarProducto,
}