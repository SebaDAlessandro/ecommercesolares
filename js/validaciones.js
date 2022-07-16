export function valida(input) {
    const tipoDeInput = input.dataset.tipo;
    if (validadores[tipoDeInput]){
        validadores[tipoDeInput](input)
    }

    if(input.validity.valid){
        input.parentElement.classList.remove('contacto__input--invalid');
        input.parentElement.querySelector('.input-mensage-error').innerText = '';
    }else{
        input.parentElement.classList.add('contacto__input--invalid');
        input.parentElement.querySelector('.input-mensage-error').innerText = mostrarMensajeError(tipoDeInput, input)
    }
}

const tipoErrores = [
    'valueMissing',
    'typeMismatch',
]

const mensajeError = {
    nombre:{
        valueMissing: 'El campo "nombre" no puede estar vacío.'
    },
    email:{
        valueMissing: 'Ingrese un mail valido.',
        typeMismatch:'El correo no es valido'
    },
    usuario:{
        valueMissing: 'Ingrese un usuario valido.',
        typeMismatch:'El usuario no es valido'
    },
    asunto:{
        valueMissing: 'El campo "asunto" no puede estar vacío.'
    },
    password:{
        valueMissing: 'El campo no puede estar vacío.',
        patternMismatch: "Al menos 6 caracteres, debe contener una letra minúscula, una letra mayúscula, un número y no puede contener caracteres especiales.",
    }
}

function mostrarMensajeError (tipoDeInput, input){

    let mensaje = '';
    tipoErrores.forEach( (error) =>{
        if(input.validity[error]){
              mensaje = mensajeError[tipoDeInput][error]
        }
    })
    return mensaje
}



const validadores = {
    nombre: input => validarNombre(input),
}

function validarNombre (input){
    const nombre = input.value;
    let mensaje = '';
    if(nombre.length > 40){
        mensaje = 'Máximo 40 letras.'
    }
    input.setCustomValidity(mensaje)
}