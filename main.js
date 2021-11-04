class Comida {
  constructor(nombre, precio){
      this.nombre = nombre.toUpperCase();
      this.precio = Number(precio);
      this.ordenado = false;
  }
  descuentoPrimavera(){
      this.precio = (this.precio*75)/100;
      console.log(this.precio);
  }
  ordenar(){
      this.ordenado = true;
      console.log(this.ordenado);
  }
}

const comidas = [];

comidas.push(new Comida("picada", 50));
comidas.push(new Comida("milanesaConPure", 150));
comidas.push(new Comida("flan", 40));
comidas.push(new Comida("helado", 35));
comidas.push(new Comida("vitelTone", 60));
comidas.push(new Comida("tallarinesConTuco", 100));
comidas.push(new Comida("tarta", 30));
comidas.push(new Comida("ensaladaCesar", 75));
comidas.push(new Comida("sopaDeCalabaza", 35));

console.log(comidas)

const preciosConDescuentoPrimavera = comidas.map(comida => comida.precio = comida.precio*75/100);
for (const comida of comidas) {
  console.log(comida.nombre);
  console.log(comida.precio);
}

function precioTotal (entrada, platoPrincipal, postre){
  sumaTotal = entrada + platoPrincipal + postre;
  return console.log("El precio total de su pedido es $"+ sumaTotal);
}

let mensajeUbicacion = document.getElementById("mensajeUbicacion");
let menu = document.getElementById("menu");

let formularioBienvenida = document.getElementById("formulario");
formularioBienvenida.addEventListener("submit", validarFormulario);

function validarFormulario(e){
    e.preventDefault();
    let formulario = e.target
    console.log(formulario.children[1].value);  
    console.log(formulario.children[3].value);
    console.log(formulario.children[5].value);

    sessionStorage.setItem('nombreCliente', formulario.children[1].value);
    sessionStorage.setItem('cantidadPersonas', formulario.children[3].value);
    sessionStorage.setItem('fumadores', formulario.children[5].value);

    const nombreDinamico = formulario.children[1].value;
    const cantidadPersonas = formulario.children[3].value;
    const fumadores = formulario.children[5].value;

    $("#mensajeBienvenida").slideUp("slow");
    $("#formulario").slideUp("slow");

    if (fumadores == "si"){
        if (cantidadPersonas >= 5){
            return mensajeUbicacion.innerHTML = `¡Hola ${nombreDinamico}! Bienvenid@ al Restaurante, subí por la escalera de mano derecha y seras ubicado en la terraza <h2>Entradas</h2>
            <div class="row"><div class="col"><div class="card" style="width: 18rem;">
              <img src="/Img/Picada.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Picada</h5>
                <p class="card-text">Jamon, queso, aceitunas, queso untable y pan casero.</p>
                <a href="#" class="btn btn-primary">Ordenar</a>
              </div>
            </div></div>
            <div class="col"><div class="card" style="width: 18rem;">
              <img src="/Img/Vitel Tone.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Vitel Tone</h5>
                <p class="card-text">Receta casera de Vitel Tone, clasico de la casa.</p>
                <a href="#" class="btn btn-primary">Ordenar</a>
              </div>
            </div></div>
            <div class="col"><div class="card" style="width: 18rem;">
              <img src="/Img/Ensalada Cesar.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Ensalada Cesar</h5>
                <p class="card-text">Hojas de lechuga romana, queso parmesano, pollo y adereso especial.</p>
                <a href="#" class="btn btn-primary">Ordenar</a>
              </div>
            </div></div></div></div>
            <h2>Plato Principal</h2>
            <div class="row"><div class="col"><div class="card" style="width: 18rem;">
              <img src="/Img/Milanesa Con Pure.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Milanesa Con Pure</h5>
                <p class="card-text">Milanesa de carne con pure mixto de papa y calabaza.</p>
                <a href="#" class="btn btn-primary">Ordenar</a>
              </div>
            </div></div>
            <div class="col"><div class="card" style="width: 18rem;">
              <img src="/Img/Tallarines Con Tuco.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Tallarines Con Tuco</h5>
                <p class="card-text">Tallarines de la casa con salsa Bolognesa.</p>
                <a href="#" class="btn btn-primary">Ordenar</a>
              </div>
            </div></div>
            <div class="col"><div class="card" style="width: 18rem;">
              <img src="/Img/Sopa De Calabaza.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Sopa De Calabaza</h5>
                <p class="card-text">Sopa bien cremosa de Calabaza dulce, añadido de crema de leche.</p>
                <a href="#" class="btn btn-primary">Ordenar</a>
              </div>
            </div></div></div>
            <h2>Postre</h2>
            <div class="row"><div class="col"><div class="card" style="width: 18rem;">
              <img src="/Img/Helado.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Helado</h5>
                <p class="card-text">De chocolate, dulce de leche, frutilla o vainilla.</p>
                <a href="#" class="btn btn-primary">Ordenar</a>
              </div>
            </div></div>
            <div class="col"><div class="card" style="width: 18rem;">
              <img src="/Img/Tarta.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Tarta</h5>
                <p class="card-text">Tarta de frutos rojos con masa casera.</p>
                <a href="#" class="btn btn-primary">Ordenar</a>
              </div>
            </div></div>
            <div class="col"><div class="card" style="width: 18rem;">
              <img src="/Img/Flan.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Flan</h5>
                <p class="card-text">Bien casero, con dulce de leche o crema.</p>
                <a href="#" class="btn btn-primary">Ordenar</a>
              </div>
            </div></div></div>`;
        } else {
            return mensajeUbicacion.innerHTML = `¡Hola ${nombreDinamico}! Bienvenid@ al Restaurante, subí por la escalera de mano izquierda y seras ubicado en la terraza <h2>Entradas</h2>
            <div class="row"><div class="col"><div class="card" style="width: 18rem;">
              <img src="/Img/Picada.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Picada</h5>
                <p class="card-text">Jamon, queso, aceitunas, queso untable y pan casero.</p>
                <a href="#" class="btn btn-primary">Ordenar</a>
              </div>
            </div></div>
            <div class="col"><div class="card" style="width: 18rem;">
              <img src="/Img/Vitel Tone.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Vitel Tone</h5>
                <p class="card-text">Receta casera de Vitel Tone, clasico de la casa.</p>
                <a href="#" class="btn btn-primary">Ordenar</a>
              </div>
            </div></div>
            <div class="col"><div class="card" style="width: 18rem;">
              <img src="/Img/Ensalada Cesar.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Ensalada Cesar</h5>
                <p class="card-text">Hojas de lechuga romana, queso parmesano, pollo y adereso especial.</p>
                <a href="#" class="btn btn-primary">Ordenar</a>
              </div>
            </div></div></div></div>
            <h2>Plato Principal</h2>
            <div class="row"><div class="col"><div class="card" style="width: 18rem;">
              <img src="/Img/Milanesa Con Pure.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Milanesa Con Pure</h5>
                <p class="card-text">Milanesa de carne con pure mixto de papa y calabaza.</p>
                <a href="#" class="btn btn-primary">Ordenar</a>
              </div>
            </div></div>
            <div class="col"><div class="card" style="width: 18rem;">
              <img src="/Img/Tallarines Con Tuco.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Tallarines Con Tuco</h5>
                <p class="card-text">Tallarines de la casa con salsa Bolognesa.</p>
                <a href="#" class="btn btn-primary">Ordenar</a>
              </div>
            </div></div>
            <div class="col"><div class="card" style="width: 18rem;">
              <img src="/Img/Sopa De Calabaza.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Sopa De Calabaza</h5>
                <p class="card-text">Sopa bien cremosa de Calabaza dulce, añadido de crema de leche.</p>
                <a href="#" class="btn btn-primary">Ordenar</a>
              </div>
            </div></div></div>
            <h2>Postre</h2>
            <div class="row"><div class="col"><div class="card" style="width: 18rem;">
              <img src="/Img/Helado.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Helado</h5>
                <p class="card-text">De chocolate, dulce de leche, frutilla o vainilla.</p>
                <a href="#" class="btn btn-primary">Ordenar</a>
              </div>
            </div></div>
            <div class="col"><div class="card" style="width: 18rem;">
              <img src="/Img/Tarta.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Tarta</h5>
                <p class="card-text">Tarta de frutos rojos con masa casera.</p>
                <a href="#" class="btn btn-primary">Ordenar</a>
              </div>
            </div></div>
            <div class="col"><div class="card" style="width: 18rem;">
              <img src="/Img/Flan.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Flan</h5>
                <p class="card-text">Bien casero, con dulce de leche o crema.</p>
                <a href="#" class="btn btn-primary">Ordenar</a>
              </div>
            </div></div></div>`;;
        }
    } else if (fumadores == "no"){
        if (cantidadPersonas < 5){
            return mensajeUbicacion.innerHTML = `¡Hola ${nombreDinamico}! Bienvenid@ al Restaurante, avanza hacia mano derecha y seras ubicado en la terraza <h2>Entradas</h2>
            <div class="row"><div class="col"><div class="card" style="width: 18rem;">
              <img src="/Img/Picada.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Picada</h5>
                <p class="card-text">Jamon, queso, aceitunas, queso untable y pan casero.</p>
                <a href="#" class="btn btn-primary">Ordenar</a>
              </div>
            </div></div>
            <div class="col"><div class="card" style="width: 18rem;">
              <img src="/Img/Vitel Tone.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Vitel Tone</h5>
                <p class="card-text">Receta casera de Vitel Tone, clasico de la casa.</p>
                <a href="#" class="btn btn-primary">Ordenar</a>
              </div>
            </div></div>
            <div class="col"><div class="card" style="width: 18rem;">
              <img src="/Img/Ensalada Cesar.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Ensalada Cesar</h5>
                <p class="card-text">Hojas de lechuga romana, queso parmesano, pollo y adereso especial.</p>
                <a href="#" class="btn btn-primary">Ordenar</a>
              </div>
            </div></div></div></div>
            <h2>Plato Principal</h2>
            <div class="row"><div class="col"><div class="card" style="width: 18rem;">
              <img src="/Img/Milanesa Con Pure.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Milanesa Con Pure</h5>
                <p class="card-text">Milanesa de carne con pure mixto de papa y calabaza.</p>
                <a href="#" class="btn btn-primary">Ordenar</a>
              </div>
            </div></div>
            <div class="col"><div class="card" style="width: 18rem;">
              <img src="/Img/Tallarines Con Tuco.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Tallarines Con Tuco</h5>
                <p class="card-text">Tallarines de la casa con salsa Bolognesa.</p>
                <a href="#" class="btn btn-primary">Ordenar</a>
              </div>
            </div></div>
            <div class="col"><div class="card" style="width: 18rem;">
              <img src="/Img/Sopa De Calabaza.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Sopa De Calabaza</h5>
                <p class="card-text">Sopa bien cremosa de Calabaza dulce, añadido de crema de leche.</p>
                <a href="#" class="btn btn-primary">Ordenar</a>
              </div>
            </div></div></div>
            <h2>Postre</h2>
            <div class="row"><div class="col"><div class="card" style="width: 18rem;">
              <img src="/Img/Helado.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Helado</h5>
                <p class="card-text">De chocolate, dulce de leche, frutilla o vainilla.</p>
                <a href="#" class="btn btn-primary">Ordenar</a>
              </div>
            </div></div>
            <div class="col"><div class="card" style="width: 18rem;">
              <img src="/Img/Tarta.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Tarta</h5>
                <p class="card-text">Tarta de frutos rojos con masa casera.</p>
                <a href="#" class="btn btn-primary">Ordenar</a>
              </div>
            </div></div>
            <div class="col"><div class="card" style="width: 18rem;">
              <img src="/Img/Flan.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Flan</h5>
                <p class="card-text">Bien casero, con dulce de leche o crema.</p>
                <a href="#" class="btn btn-primary">Ordenar</a>
              </div>
            </div></div></div>`;
        } else {
            return mensajeUbicacion.innerHTML = `¡Hola ${nombreDinamico}! Bienvenid@ al Restaurante, avanza hacia mano izquierda y seras ubicado en la terraza <h2>Entradas</h2>
            <div class="row"><div class="col"><div class="card" style="width: 18rem;">
              <img src="/Img/Picada.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Picada</h5>
                <p class="card-text">Jamon, queso, aceitunas, queso untable y pan casero.</p>
                <a href="#" class="btn btn-primary">Ordenar</a>
              </div>
            </div></div>
            <div class="col"><div class="card" style="width: 18rem;">
              <img src="/Img/Vitel Tone.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Vitel Tone</h5>
                <p class="card-text">Receta casera de Vitel Tone, clasico de la casa.</p>
                <a href="#" class="btn btn-primary">Ordenar</a>
              </div>
            </div></div>
            <div class="col"><div class="card" style="width: 18rem;">
              <img src="/Img/Ensalada Cesar.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Ensalada Cesar</h5>
                <p class="card-text">Hojas de lechuga romana, queso parmesano, pollo y adereso especial.</p>
                <a href="#" class="btn btn-primary">Ordenar</a>
              </div>
            </div></div></div></div>
            <h2>Plato Principal</h2>
            <div class="row"><div class="col"><div class="card" style="width: 18rem;">
              <img src="/Img/Milanesa Con Pure.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Milanesa Con Pure</h5>
                <p class="card-text">Milanesa de carne con pure mixto de papa y calabaza.</p>
                <a href="#" class="btn btn-primary">Ordenar</a>
              </div>
            </div></div>
            <div class="col"><div class="card" style="width: 18rem;">
              <img src="/Img/Tallarines Con Tuco.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Tallarines Con Tuco</h5>
                <p class="card-text">Tallarines de la casa con salsa Bolognesa.</p>
                <a href="#" class="btn btn-primary">Ordenar</a>
              </div>
            </div></div>
            <div class="col"><div class="card" style="width: 18rem;">
              <img src="/Img/Sopa De Calabaza.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Sopa De Calabaza</h5>
                <p class="card-text">Sopa bien cremosa de Calabaza dulce, añadido de crema de leche.</p>
                <a href="#" class="btn btn-primary">Ordenar</a>
              </div>
            </div></div></div>
            <h2>Postre</h2>
            <div class="row"><div class="col"><div class="card" style="width: 18rem;">
              <img src="/Img/Helado.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Helado</h5>
                <p class="card-text">De chocolate, dulce de leche, frutilla o vainilla.</p>
                <a href="#" class="btn btn-primary">Ordenar</a>
              </div>
            </div></div>
            <div class="col"><div class="card" style="width: 18rem;">
              <img src="/Img/Tarta.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Tarta</h5>
                <p class="card-text">Tarta de frutos rojos con masa casera.</p>
                <a href="#" class="btn btn-primary">Ordenar</a>
              </div>
            </div></div>
            <div class="col"><div class="card" style="width: 18rem;">
              <img src="/Img/Flan.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Flan</h5>
                <p class="card-text">Bien casero, con dulce de leche o crema.</p>
                <a href="#" class="btn btn-primary">Ordenar</a>
              </div>
            </div></div></div>`;
        }
    }

}

$('#botonFinalizar').append('<button id="boton" id="botonfinalizar">Finalizar orden</button>');
$("#botonFinalizar").click(function () {
    $('#mensajeDespedida').append("<h2>¡Adios y gracias por elegirnos!</h2>");
    $("#mensajeUbicacion").slideUp("slow");
    $("#formulario").slideUp("slow");
    console.log("Respuesta a un click");
});

const URLGET   = "https://jsonplaceholder.typicode.com/posts"
const infoPost =  { nombre: "Ana", mesa: "24" }

$("#desafioAJAX").prepend('<button id="btnAJAX">POST</button>');
$("#btnAJAX").click(() => { 
    $.post(URLGET, infoPost ,(respuesta, estado) => {
        if(estado === "success"){
            $("#desafioAJAX").prepend(`${respuesta.nombre} ocupa la mensa ${respuesta.mesa}`);
        }  
    });
});