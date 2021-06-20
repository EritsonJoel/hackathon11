//DOM TRAVERSING :es moverte a voluntar propia por todo el DOM

//
 const hijo = document.getElementById('hijo');
 console.log(hijo);  //el hijo

 console.log(hijo.childNodes);//para mostrar los elementos del hijo
 console.log(hijo.children);//para mostrar los elementos hijos.

 const padre = hijo.parentElement;
 const abuelo = hijo.parentElement.parentElement;

 console.log(padre); //el padre 
 console.log(abuelo.parentElement);// el abuelo


 const pa = document.getElementById('pa')//.remove(); borra el elemento
pa.firstElementChild.style.color = 'blue';


const pi = document.getElementById('cont');

pi.addEventListener('click', (e) =>{
   if(e.target.classList.contains('comprar')){
     // console.log(
       //  e.target.parentElement.parentElement.previousElementSibling.firstElementChild.textContent
         //);
         const  itemAgregar = { //creando objeto literal
            title:
            e.target.parentElement.parentElement.previousElementSibling.firstElementChild.textContent
         };
        
         agregarcarrito(itemAgregar);
         //console.log(itemAgregar);
   }
 
});
//creando nuevo arreglo, pra mostrar los productos   que voy seleccionado.

let arregloItems = [];

function agregarcarrito (item){
   arregloItems.push(item);
   console.log(arregloItems);
}




//pa.style.display = 'none'; //otra forma de borra ,u ocultar el elemento.


//padre.style.backgroundColor = 'salmon';
//padre.style.width = '500px';
//padre.style.height = '500px'

//function getAbuelo(elemento){
   // return elemento.parentElement.parentElement;
//}
//console.log(getAbuelo(hijo.nextElementSibling.nextElementSibling));


//nextElementSibling: para avanzar un hijo despues
//previousElementSibling : para regresar un hijo anterior
//childNode: para mostrar la lista de nodos, puede ser texto, elemntos,atributos.
//children: me devuelve ,me muestra los elementos hijos.
//firstElementChild.style.color : sirve para  seleccionar el primer hijo de un elemento padre, y asi realizar cambios.
//LastElementChild : sirve para seleccionar el ultimo hijo del elemento padre.
//.remove(); borra el elemento , saca el elemento.

