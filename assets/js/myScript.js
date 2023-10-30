let items_titulo = document.getElementById("items_titulo");
let cambioEstaActivo = true;


setInterval(()=>{
    if(cambioEstaActivo)items_titulo.innerText = "SEAN TODOS BIENVENIDOS";
    else{items_titulo.innerText = "¡ESTANCO DE FERCHO!";}
    cambioEstaActivo = !cambioEstaActivo;
},4000);