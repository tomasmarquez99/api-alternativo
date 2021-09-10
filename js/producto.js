let ROPA_URL_DESCRIPCION = 'https://tomasmarquez99.github.io/api-alternativo/productos.json';

function mostrarDescripcion(producto) {
    let ropa = '';
    for (i = 0; i < producto.length; ++i) {
        let ropa = producto[i];
        
        document.getElementById("informacion").innerHTML +=
            `  

  
  <p>hola</p>
  
  `;

    }


}




document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(ROPA_URL_DESCRIPCION).then(function (result) {
        if (result.status === 'ok') {



            result.data.forEach(producto => {
                if (producto.id == JSON.parse(localStorage.getItem('producto')).idProducto) {
                    

                    mostrarDescripcion(producto);
                    
                }
            });
        }
    })


});