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

export const productoServices = {
    listaProductos,
    crearProducto,
}