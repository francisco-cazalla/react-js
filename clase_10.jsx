
// EVENTOS
/*
-un evento es un estimulo programatico , que puede ser generado manualmente o puede ser por el usuario, como por ejemplo cuandonetflix detecta que no apretaste ningun boton por sierto tirmpo , te pregunta si estas ahi.

// DOM Events:
- El DOM tiene eventos y se dividen por categorias

-Dispositivo/accion  :mouse,input,keyboard,whrll,focus,etc.

-Custo,, events: definidos propiamiamente para que disparen la inforrmacion que queremos , el mas conocido es el click*/

import { div } from "framer-motion/client";

const { CgLogIn } = require("react-icons/cg");

<div>
    <button onClick={input}>Buton</button>
</div>

// Event listener
/*
- Event listener es un patron de diseño que sirve para escuchar cuando algo ocurre en algun elemento , API ,libreria y poder realizar una cocecuencia
 */
// Agregua un eventlistener
window.addEventListener('resize',onResize);

// Removiendo un event listener
return () => {
    console.log('On dismount');
    window.removeEventListener(onResize)
}

// React y los eventos
//- declaramos un evento
export default function Ejem(){
function onClick(evt){
    console.log("Clicked")
}
return(
    <div>
<button onClick={onClick}>Clickme</button>
    </div> // consola :"Clicked"
)
}
