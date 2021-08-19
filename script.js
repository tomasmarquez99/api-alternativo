let datosRopa = "https://tomasmarquez99.github.io/api-alternativo/ropa.json";

document.addEventListener("DOMContentLoaded", function (e){
    
    function cargarDatos(url) {
        
        document.getElementById("productos").innerHTML = "";
        fetch(url)
            .then(respuesta => respuesta.json())
    
            .then(datos => {
                for( let i = 0; i < datos.lenght; ++i){
            let datosRopa = datos[i];

            document.getElementById("productos").innerHTML += datosRopa
        }
            })
            .catch(error => alert("Hubo un error: " + error));
    }

    cargarDatos(datosRopa);
})

    

    
    