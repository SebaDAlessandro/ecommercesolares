export function formateandoPrecio(precio){
    const formatearPeso = new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARG',
        minimumFractionDigits: 0
    })
    let valor = formatearPeso.format(precio)
    return valor
}