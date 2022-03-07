// Mensaje de bienvenida
alert("Bienvenido al juego, cachipún contra la máquina")

 //Veces que se repetirá el juego
var juegos = parseInt(prompt("Ingrese la cantidad de veces que quiere jugar"));

var winMachine = 0;
var winUser = 0;
  
  for (
    var playCount = 1;
    playCount <= juegos;
    playCount++
  ) {

    var userPlayer = prompt("Ingrese su jugada: piedra, papel o tijera");
  
    /**
     * piedra = 0
     * papel = 1
     * tijera = 2
     */
  
    var randomNumber = Math.floor(Math.random() * 3);
    var machinePlayer = "";
  
    //if-else
     if (randomNumber === 0) {
       machinePlayer = "piedra";
     } else if (randomNumber === 1) {
       machinePlayer = "papel";
     } else if (randomNumber === 2) {
       machinePlayer = "tijera";
     } else {
       alert("el randomNumber no esta dentro del rango: " + randomNumber);
     }


    if (userPlayer === machinePlayer) {
      alert("hay un empate");
    } else {
    
      if (userPlayer === "tijera" ) {
        alert("el jugador saco tijera");
        if (machinePlayer === "papel") {
          alert("la maquina saco papel");
          alert("El jugador gana, la maquina pierde");
          winUser++;
        } else if (machinePlayer === "piedra") {
          alert("la maquina saco piedra");
          alert("La maquina gana, el jugador pierde");
          winMachine++;
        } else {
          alert("La maquina hizo un movimiento no valido");
        }
      } else if (userPlayer === "papel") {
        alert("el jugador saco papel");
        if (machinePlayer === "tijera") {
          alert("la maquina saco tijera");
          alert("La maquina gana, el jugador pierde");
          winMachine++;
        } else if (machinePlayer === "piedra") {
          alert("la maquina saco piedra");
          alert("El jugador gana, la maquina pierde");
          winUser++;
        } else {
          alert("La maquina hizo un movimiento no valido");
        }
      } else if (userPlayer === "piedra") {
        alert("el jugador saco piedra");
        if (machinePlayer === "papel") {
          alert("la maquina saco papel");
          alert("La maquina gana, el jugador pierde");
          winMachine++;
        } else if (machinePlayer === "tijera") {
          alert("la maquina saco tijera");
          alert("El jugador gana, la maquina pierde");
          winUser++;
        } else {
          alert("La maquina hizo un movimiento no valido");
        }
      } else {
        alert("el movimiento del jugador no es valido");
      }
    }
  }
  
  
  if (winMachine === winUser) {
    alert("Se declara el empate")
  } else if (winMachine > winUser) {
    alert("Has perdido contra la maquina")
  } else {
    alert("Felicitaciones, le has ganado a la maquina")
  }