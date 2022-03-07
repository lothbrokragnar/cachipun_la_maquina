# Desafío - Cachipún contra la máquina

● Para realizar este desafío debes haber estudiado previamente todo el material
disponible correspondiente a la unidad.
● Una vez terminado el desafío, comprime la carpeta que contiene el desarrollo de los
requerimientos solicitados y sube el .zip en el LMS.
● Puntaje total: 10 puntos.
● Desarrollo desafío:
○ El desafío se debe desarrollar de manera Individual/Grupal.
○ Para la realización del desafío necesitarás apoyarte del archivo Apoyo Desafío
- Cachipún contra la máquina
Capítulos
● Control de flujos
● Ciclos
● Funciones en JavaScript
Descripción
Crear un programa que le permita a una persona jugar al cachipún contra el computador,
indicando cuántas veces desea jugar o repetir el juego. El cachipún es un juego entre dos
personas (en este caso, tú y el computador) donde cada una de ellas de manera
independiente y secreta debe elegir una de las opciones (piedra, papel y tijera) y compararla
con la opción de la otra persona. Para determinar quien gana, se deben seguir las siguientes
reglas:
● Tijera le gana a papel
● Papel le gana a piedra
● Piedra le gana a tijera
● Si ambos jugadores eligen la misma opción es un empate
_ 1
www.desafiolatam.com
Requerimientos
1. Solicitar al usuario las veces que desea que se repita el juego consecutivamente, es
decir, cuántas veces deberá jugar contra la computadora. Por cada juego, se debe
mostrar el resultado inmediatamente y luego pedir nuevamente una respuesta
dependiendo de las veces que haya indicado el usuario que desea jugar. (2 Punto)
2. Solicitar al usuario que indique su jugada. (1 Punto)
Las opciones son las siguientes:
● Piedra
● Papel
● Tijera
3. Generar una jugada automática para la máquina usando la función Math.random()
de Javascript. (2 Puntos)
4. Definir a un ganador considerando la jugada del usuario y la generada
automáticamente para la máquina. (3 Puntos)
5. Indicar el resultado de la partida dependiendo del caso: (2 puntos)
● Felicitar al ganador en caso de ser el usuario.
● Indicarle al usuario que ha perdido contra la máquina en caso de que ésta sea
la que gane.
● Declarar un empate.
