let ROPA_URL_DESCRIPCION = 'https://tomasmarquez99.github.io/api-alternativo/productos.json';

function mostrarDescripcion(objeto) {
    let ropa = '';
    var elemento = document.getElementById('informacion');
    console.log('algo')
    var contenido = '';

    contenido +=
        `  <div class="row">
        
            <h3 class="text-center">${objeto.nombre}</h3>
            <br><br>
            <div class="row">
            <div class="col-3"></div>
            <div class='text-center col-6'>${objeto.descripcion}</div>
            <div class="col-3"></div>
            </div>
            <div class="row">
            <div class="col"></div>
            <div class='text-center col-4'>Categoría: ${objeto.categoria}</div>
            <div class="col-4"></div>
            </div>
            
        </div>
         `


    elemento.innerHTML = contenido

}

/* function mostrarCuestionario(objeto) {





    document.getElementById('cuestionario').innerHTML +=
        `
    <table width=600 border=1 align="center" bgcolor="#EEEEEE">
    
    <tr><td width="600">
    <b><font color="Blue">1. ¿Que talle usas de ${objeto.nombre}?</font></b>
    <blockquote>
    <input type="radio" name="pregunta1" value="A" onclick="respuesta1('A')"> S<br>
    <input type="radio" name="pregunta1" value="B" onclick="respuesta1('B')"> M<br> 
    <input type="radio" name="pregunta1" value="C" onclick="respuesta1('C')"> L<br> 
    </blockquote>
    </td></tr>
    
    <tr><td>
    <b><font color="Blue">¿A que categoria pertenece?</font></b>
    <blockquote>
    <input type="radio" name="pregunta2" value="A" onclick="respuesta2('A')">${objeto.categoria}<br> 
    <input type="radio" name="pregunta2" value="B" onclick="respuesta2('B')">ropa interior<br> 
    <input type="radio" name="pregunta2" value="C" onclick="respuesta2('C')">campera<br><br>
    </blockquote>
     </td></tr>
     
    <tr><td>
    <b><font color="Blue">¿Cual es la correcta?</font></b>
    <blockquote>
    <input type="radio" name="pregunta3" value="A" onclick="respuesta3('A')">A. x= 29.<br>
    <input type="radio" name="pregunta3" value="B" onclick="respuesta3('B')">B. x= 27.<br>
    <input type="radio" name="pregunta3" value="C" onclick="respuesta3('C')">C. x= 16.<br>
    </blockquote>
    <button onclick="examinar()">Examinar</button>
    <button onclick="avisoreset()">Resetear test</button>
    </td></tr>
    `;






}




function respuesta1(valor) { pregunta1 = valor };
function respuesta2(valor) { pregunta2 = valor };
function respuesta3(valor) { pregunta3 = valor };

let pregunta1 = '0'
let pregunta2 = '0'
let pregunta3 = '0'

function examinar() {
    puntuacion = 0;
    nocontesta = 0;
    contestadas = 0;
    puntosmaximos = 0;


    if (pregunta1 != "0") {
        contestadas = contestadas + 1
        puntosmaximos = puntosmaximos + 1
        if (pregunta1 == "A") { puntuacion = puntuacion + 1 }
        if (pregunta1 == "B") { puntuacion = puntuacion + 0 }
        if (pregunta1 == "C") { puntuacion = puntuacion + 0 }
    }
    else { nocontesta = nocontesta + 1 }

    if (pregunta2 != "0") {
        contestadas = contestadas + 1
        puntosmaximos = puntosmaximos + 1
        if (pregunta2 == "A") { puntuacion = puntuacion + 0 }
        if (pregunta2 == "B") { puntuacion = puntuacion + 1 }
        if (pregunta2 == "C") { puntuacion = puntuacion + 0 }
    }
    else { nocontesta = nocontesta + 1 }

    if (pregunta3 != "0") {
        contestadas = contestadas + 1
        puntosmaximos = puntosmaximos + 1
        if (pregunta3 == "A") { puntuacion = puntuacion + 0 }
        if (pregunta3 == "B") { puntuacion = puntuacion + 0 }
        if (pregunta3 == "C") { puntuacion = puntuacion + 1 }
    }
    else { nocontesta = nocontesta + 1 }



    

    var puntuacionPromedio = 0;
    if (puntosmaximos != 0) {
        indiceacierto = Math.round(100 * (puntuacion / puntosmaximos))
    }
    else { indiceacierto = 0 }

*/


/*var cantidadTest = parseInt(localStorage.getItem('Cantidad de test'));
if(localStorage.getItem('Cantidad de test'))
{
    cantidadTest += 1;
    
}else{
    localStorage.setItem('Cantidad de test', cantidadTest);

localStorage.setItem('puntuacion', JSON.stringify({ puntuacion: puntuacion }));
}
*/



document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(ROPA_URL_DESCRIPCION).then(function (result) {
        if (result.status === 'ok') {


            result.data.forEach(producto => {
                if (producto.id == JSON.parse(localStorage.getItem('producto')).idProducto) {

                    mostrarDescripcion(producto);
                    //mostrarCuestionario(producto);



                }
            });

           
        }
    });


})
