let ropa_URL = "https://tomasmarquez99.github.io/api-alternativo/ropa.json";
let datos = [];

function cargarDatos(datos) {
    let ropa = "";
    for (let i = 0; i < datos.length; ++i) {
        
        let datosRopa = datos[i];

        ropa += datosRopa.nombre;
        

        document.getElementsByClassName("productos").innerHTML += ropa;

        console.log(ropa)
       
    }
    

}



document.addEventListener("DOMContentLoaded", function (e) {

    fetch(ropa_URL)
        .then(respuesta => respuesta.json())

        .then(datos => {
            cargarDatos(datos);

        }
        )
})







