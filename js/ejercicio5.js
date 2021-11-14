/*15- Realiza un script que cuente el número de vocales que tiene un texto.
*/
let contador=0
let text= prompt('Ingrese un texto');


for(i=0; i<text.length ; i++){
   
    if(text.charAt(i)=== 'a' ||text.charAt (i) ==='e' ||text.charAt (i) ==='i'||text.charAt (i)==='o' ||text.charAt (i) ==='u'  ){
     
      contador++
    }

   
    
}
document.write(contador)


// 