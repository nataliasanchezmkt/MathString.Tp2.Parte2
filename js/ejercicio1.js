/*11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp


*/

let maxAge=''
let firstName = prompt('Ingrese su nombre')
let firstAge = parseInt(prompt('Ingrese su edad'))
let secondName = prompt('Ingrese su nombre')
let secondAge = parseInt(prompt('Ingrese su edad'))
let thridName = prompt('Ingrese su nombre')
let thridAge = parseInt(prompt('Ingrese su edad'))


maxAge= Math.max(firstAge,secondAge,thridAge)
console.log(maxAge);

if(maxAge===firstAge){
    document.write(firstName)
}else if(maxAge===secondAge){
    document.write(secondName)
}else if (maxAge===thridAge){
    doncument.write(thridName)
}

