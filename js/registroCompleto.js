swal({
    title: "Excelente!",
    text: "Se ha agregado un nuevo producto!",
    icon: "success",
    button: "Volver",
  })

  const btnAgregarProducto = document.querySelector('#btnAgregarProducto')
  const btnVolverMenu = document.querySelector('#btnVolverMenu')

  btnAgregarProducto.addEventListener('click',()=>{
    window.location.href = '../agregarProducto.html'
  })

  btnVolverMenu.addEventListener('click',()=>{
    window.location.href = '../allProductos.html'
  })

  /*
  
importante: en todo momento debo guardar en el registro local el usuario y la contraseña

tambien falta agregar las validaciones al resto de los inputs

  */