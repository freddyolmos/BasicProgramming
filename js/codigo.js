//1 para piedra, 2 para papel y 3 para tijera
function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+1)
}

function eleccion(num1){
    if(num1==1){
        return "piedra 🥌"
    }
    else if(num1==2){
        return "papel 📄"
    }
    else if(num1==3){
        return "tijeras ✂"
    }
    else{
        return "PERDER 😢"
    }
}

function juego(jugador1,pc1){

    if(jugador1 == pc1) return "EMPATE"
    else if (jugador1==1 && pc1==3){
        return "GANASTE"
    } 
    else if (jugador1==2 && pc1==1){
        return "GANASTE"
    } 
    else if (jugador1==3 && pc1==2){
        return "GANASTE"
    } 
    else return "PERDISTE"
     
}

let jugador = 0
let pc = 0
let ganar = 0
let perder = 0 

while(ganar<3 && perder<3){

    jugador = prompt("Elige 1 para piedra, 2 para papel y 3 para tijera: ")
    pc = aleatorio(1,3)

    alert("Has elegido "+eleccion(jugador))
    alert("La PC ha elegido "+eleccion(pc))
    alert(juego(jugador,pc))

    if(juego(jugador,pc)=="GANASTE") ganar++
    if(juego(jugador,pc)=="PERDISTE") perder++
}

alert("Ganaste "+ganar+" veces. Perdiste "+perder+" veces.")