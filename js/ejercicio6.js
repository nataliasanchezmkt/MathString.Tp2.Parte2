/*16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.*/


let salida = ''
let caracter =''

let text= prompt('Ingrese un texto')
for(i=0;i<text.length;i++){
    caracter=text.charAt(i)
    salida= caracter + salida
}

document.write(salida)