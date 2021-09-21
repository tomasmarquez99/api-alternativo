let ropa_URL = "https://tomasmarquez99.github.io/api-alternativo/ropa.json";

function cargarDatos(datos) {
    let ropa = "";
    for (let i = 0; i < datos.length; ++i) {

        let datosRopa = datos[i];

        nombres = datosRopa.nombre;
        precios = datosRopa.precio;
        imagenes = datosRopa.imagen;

        document.getElementById("productos").innerHTML +=
        `  
        <span onclick='descripcionProducto(${datosRopa.id})'>
        <tr>
        <td>${nombres}</td>
        <td>$${precios}</td>
        <td><img src="${imagenes}" class="float-right img-fluid" width="200" height="200"></td>
        
        <td><button onclick='descripcionProducto(${datosRopa.id})'>Descripción</button></td>
        </tr>
        <span>
        `;



    }

    


}
function descripcionProducto(id){
    localStorage.setItem('producto', JSON.stringify({idProducto: id}));
    window.location='producto.html'
    
    }



document.addEventListener("DOMContentLoaded", function (e) {

    fetch(ropa_URL)
        .then(respuesta => respuesta.json())

        .then(datos => {
            cargarDatos(datos);

        }
        )


});




        
/*function guardarDatos(){
    //primero creo un objeto con dos atributos. ahi guardo lo que el usuario puso
    // cuando hace click. la function guardar datos es lo mismo que
    // el event listener
     let datos_usuario ={
         inputEmail: document.getElementById("inputEmail").value,
         inputPasword: document.getElementById("inputPassword").value
     };
     // trigo los campos con los datos y ahora tienen valor de string.
     // Si había algo guardado ahí, lo guardo
 
 
     let datos_usuario_json = JSON.stringify(datos_usuario);
     // con esto creo una nueva variable, y a través de strigify
     // guardo el objeto en sintaxis JSON
 
     localStorage.setItem('datos_usuario', datos_usuario_json);
     // llamo a setItem del objeto local storage y le paso el nombre del json y luego ese json



*/

