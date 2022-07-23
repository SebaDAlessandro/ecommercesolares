const listaProductos = ()=> fetch("http://localhost:3000/productos").then((respuesta)=> respuesta.json())

const crearProducto = (imagen, categoria, precio, promo, titulo, descripcion)=> {
    return fetch(`http://localhost:3000/productos/`,{
        method: 'POST',
        headers:{
            'Content-type':'application/json'//para que sepa que tipo de informacion estamos enviando
        },
        body:JSON.stringify({imagen, categoria, precio, promo, titulo, descripcion,id: uuid.v4()}) //stringify: convierte texto a http para poder enviar la informacion
    })
}

const eliminarProducto = (id)=>{
    return fetch(`http://localhost:3000/productos/${id}`,{
        method: 'DELETE'
    })
}

const detalleProducto = (id)=>fetch(`http://localhost:3000/productos/${id}`).then((respuesta)=> respuesta.json())

const actualizarProducto = (imagen, categoria, precio, promo, titulo, descripcion, id)=>{
    return fetch(`http://localhost:3000/productos/${id}`,{
        method: 'PUT',
        headers:{
            'Content-type':'application/json'
        },
        body: JSON.stringify({imagen, categoria, precio, promo, titulo, descripcion})
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