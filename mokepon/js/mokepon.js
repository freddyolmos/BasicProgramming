let ataqueJugador
let ataqueEnemigo

function iniciarJuego(){
    let botonMascotaJugador=document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)

    let botonFuego=document.getElementById('boton-fuego')
    botonFuego.addEventListener('click',ataqueFuego)
    let botonAgua=document.getElementById('boton-agua')
    botonAgua.addEventListener('click',ataqueAgua)
    let botonTierra=document.getElementById('boton-tierra')
    botonTierra.addEventListener('click',ataqueTierra)
}

function seleccionarMascotaJugador(){
    let inputHipodoge=document.getElementById('hipodoge')
    let inputCapipepo=document.getElementById('capipepo')
    let inputRatigueya=document.getElementById('ratigueya')
    let spanMascotaJugador=document.getElementById('mascota-jugador')
    
    if(inputHipodoge.checked) spanMascotaJugador.innerHTML='Hipodoge'
    else if(inputCapipepo.checked) spanMascotaJugador.innerHTML='Capipepo'
    else if(inputRatigueya.checked) spanMascotaJugador.innerHTML='Ratigueya'
    else alert('Selecciona una mascota')

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo(){
    let mascotaAleatorio= aleatorio(1,3)
    let spanMascotaEnemgo=document.getElementById('mascota-enemigo')

    if(mascotaAleatorio==1) spanMascotaEnemgo.innerHTML='Hipodoge'
    else if(mascotaAleatorio==2) spanMascotaEnemgo.innerHTML='Capipepo'
    else spanMascotaEnemgo.innerHTML='Ratigueya'
}

function ataqueFuego(){
    ataqueJugador='FUEGO'
    ataqueAleatorioEnemigo()
}

function ataqueAgua(){
    ataqueJugador='AGUA'
    ataqueAleatorioEnemigo()
}

function ataqueTierra(){
    ataqueJugador='TIERRA'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio=aleatorio(1,3)
    if(ataqueAleatorio==1) ataqueEnemigo='FUEGO'
    else if(ataqueAleatorio==2) ataqueEnemigo='AGUA'
    else ataqueEnemigo='TIERRA'

}

function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+1)
}

window.addEventListener('load',iniciarJuego)

