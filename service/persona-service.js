const urlPersonas = 'https://ecommersolares.herokuapp.com/perfil'
const localPersonas = 'http://localhost:3000/perfil'

const listaPersonas = ()=> fetch(localPersonas).then((personas)=> personas.json())

export const personaServices = {
    listaPersonas,
}

/*falta crear la seccion de crear, dar de baja y actualizar */