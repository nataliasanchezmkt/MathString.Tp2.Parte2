/*17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.


*/
 let vocales = ['a','e','i','o','u']
 let text = prompt('Ingrese un texto');

 let posicion=0

  

 for(i=0; i<text.length ; i++){
   
    if(text.charAt(i)=== 'a' ||text.charAt (i) ==='e' ||text.charAt (i) ==='i'||text.charAt (i)==='o' ||text.charAt (i) ==='u'  ){
     
      posicion =i;
      break;
    }

   
    
}


if (posicion === 0 ){
    document.write('no hay vocales :(')
} else {document.write('La vocal esta en '+ posicion) }


// utilizamos break de esta manera, apenas se cumple la condicion termina el bucle sin seguir hasta el final como sucederia normalmente sin esa propiedad.