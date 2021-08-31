let ropa_URL = "https://tomasmarquez99.github.io/api-alternativo/ropa.json";

function cargarDatos(datos) {
    let ropa = "";
    for (let i = 0; i < datos.length; ++i) {
        
        let datosRopa = datos[i];

        nombres = datosRopa.nombre;
        precios = datosRopa.precio;
        imagenes = datosRopa.imagen;

        document.getElementById("productos").innerHTML += ` ${nombres} ${precios} <img src="${imagenes}"> <br><br>`;

      
       
    }
    

}



document.addEventListener("DOMContentLoaded", function (e) {

    fetch(ropa_URL)
        .then(respuesta => respuesta.json())

        .then(datos => {
            cargarDatos(datos);

        }
        )
});







