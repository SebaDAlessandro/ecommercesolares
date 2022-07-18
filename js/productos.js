const panelesArray = [
    {
        imagen:"../img/Paneles/Kit Energia Solar Multiuso Para Motorhome Camping Pesca 20w.webp",
        titulo:'Kit Energia Solar Multiuso Para Motorhome Camping Pesca 20w',
        promo: false,
        precio: "300",
    },
    {
        imagen:"../img/Paneles/Kit Solar Completo Autoinstalable Energia Panel Bateria K1.webp",
        titulo:'Kit Solar Completo Autoinstalable Energia Panel Bateria K1',
        promo: false,
        precio: "400",
    },
    {
        imagen:"../img/Paneles/Kit Panel Solar Completo Autoinstalable De 600w Con Usb K2.webp",
        titulo:'Kit Panel Solar Completo Autoinstalable De 600w Con Usb K2',
        promo: false,
        precio: "500",
    },
    {
        imagen:"../img/Paneles/Kit Panel Solar Completo 1000w Autoinstalable Motorhome K3.webp",
        titulo:'Kit Panel Solar Completo 1000w Autoinstalable Motorhome K3',
        promo: false,
        precio: "600",
    },
    {
        imagen:"../img/Paneles/Kit Panel Solar Completo Autoinstalable 1000w Energia Usb K4.webp",
        titulo:'Kit Panel Solar Completo Autoinstalable 1000w Energia Usb K4',
        promo: false,
        precio: "700",
    },
    {
        imagen:"../img/Paneles/Panel Solar 20w Watts + Regulador De Carga 10 Amp.webp",
        titulo:'Panel Solar 20w Watts + Regulador De Carga 10 Amp',
        promo: false,
        precio: "800",
    },
    {
        imagen:"../img/Paneles/Kit Panel Solar Completo 1000w Autoinstalable Motorhome K3.webp",
        titulo:'Kit Panel Solar Completo 1000w Autoinstalable Motorhome K3',
        promo: false,
        precio: "600",
    },
    {
        imagen:"../img/Paneles/Kit Panel Solar Completo Autoinstalable 1000w Energia Usb K4.webp",
        titulo:'Kit Panel Solar Completo Autoinstalable 1000w Energia Usb K4',
        promo: false,
        precio: "700",
    },
    {
        imagen:"../img/Paneles/Panel Solar 20w Watts + Regulador De Carga 10 Amp.webp",
        titulo:'Panel Solar 20w Watts + Regulador De Carga 10 Amp',
        promo: false,
        precio: "800",
    },
]

export function paneles(){
    
    const seccionTarjetas = document.querySelector('#tarjetas')


    for (let i = 0; i < 6; i++) {
        const divTarjeta = `<div class="producto__detalle-min" id="tarjeta">
        <img src="${panelesArray[i].imagen}" alt="img del producto" class="prdoucto__img">
        <p class="producto__titulo">${panelesArray[i].titulo}</p>
        <p class="producto__precio">$${panelesArray[i].precio}</p>
        <a href="#" class="producto__link">Ver producto</a>
        </div>`
        const tarjeta = document.createElement('div')

        tarjeta.innerHTML = divTarjeta

        seccionTarjetas.appendChild(tarjeta)
    }


}