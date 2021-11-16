class Comida {
  constructor(nombre, precio, ordenado){
      this.nombre = nombre.toUpperCase();
      this.precio = Number(precio);
      this.ordenado = ordenado;
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

comidas.push(new Comida("picada", 50, false));
comidas.push(new Comida("milanesaConPure", 150, false));
comidas.push(new Comida("flan", 40, false));
comidas.push(new Comida("helado", 35, false));
comidas.push(new Comida("vitelTone", 60, false));
comidas.push(new Comida("tallarinesConTuco", 100, false));
comidas.push(new Comida("tarta", 30, false));
comidas.push(new Comida("ensaladaCesar", 75, false));
comidas.push(new Comida("sopaDeCalabaza", 35, false));

console.log(comidas)

/*
const preciosConDescuentoPrimavera = comidas.map(comida => comida.precio = comida.precio*75/100);
for (const comida of comidas) {
  console.log(comida.nombre);
  console.log(comida.precio);
  console.log(comida.ordenado);
}

function precioTotal (entrada, platoPrincipal, postre){
  sumaTotal = entrada + platoPrincipal + postre;
  return console.log("El precio total de su pedido es $"+ sumaTotal);
}
*/

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
            return mensajeUbicacion.innerHTML = `¡Hola ${nombreDinamico}! Bienvenid@ al Restaurante, subí por la escalera de mano derecha y seras ubicado en la terraza.`;
        } else {
            return mensajeUbicacion.innerHTML = `¡Hola ${nombreDinamico}! Bienvenid@ al Restaurante, subí por la escalera de mano izquierda y seras ubicado en la terraza.`;
        }
    } else if (fumadores == "no"){
        if (cantidadPersonas < 5){
            return mensajeUbicacion.innerHTML = `¡Hola ${nombreDinamico}! Bienvenid@ al Restaurante, avanza hacia mano derecha y seras ubicado en una zona libre de humo.`;
        } else {
            return mensajeUbicacion.innerHTML = `¡Hola ${nombreDinamico}! Bienvenid@ al Restaurante, avanza hacia mano izquierda y seras ubicado en una zona libre de humo.`;
        }
    }

}

$('#picada').click(function () {
  comidas[0].ordenado = true;
  console.log(comidas[0]);
});

$('#milanesa').click(function () {
  comidas[1].ordenado = true;
  console.log(comidas[1]);
});

$('#flan').click(function () {
  comidas[2].ordenado = true;
  console.log(comidas[2]);
});

$('#helado').click(function () {
  comidas[3].ordenado = true;
  console.log(comidas[3]);
});

$('#vitelTone').click(function () {
  comidas[4].ordenado = true;
  console.log(comidas[4]);
});

$('#tallarines').click(function () {
  comidas[5].ordenado = true;
  console.log(comidas[5]);
});

$('#tarta').click(function () {
  comidas[6].ordenado = true;
  console.log(comidas[6]);
});

$('#ensalada').click(function () {
  comidas[7].ordenado = true;
  console.log(comidas[7]);
});

$('#sopa').click(function () {
  comidas[8].ordenado = true;
  console.log(comidas[8]);
});


$('#botonFinalizar').append('<button id="boton" id="botonfinalizar">Finalizar orden</button>');
$("#botonFinalizar").click(function () {
    $("#mensajeUbicacion").slideUp("slow");
    $("#menu").slideUp("slow");
    $("#botonFinalizar").slideUp("slow");
    const pedidoCliente = comidas.filter(comida => comida.ordenado === true);
    console.log(pedidoCliente);

    function esObjetoEstandar(objeto) {
      return Object.prototype.toString.call(objeto) === '[object Object]';
  }
  
  function sumarValoresPropiedades(datos, fn) {
      if (!Array.isArray(datos)) {
          throw TypeError('El argumento «datos» debe ser un arreglo.');
      }
  
      if(!datos.every(d => esObjetoEstandar(d))) {
          throw TypeError('El arreglo «datos» debe contener únicamente objetos.');
      }
  
      return datos.map(typeof fn === 'function' ? fn : d => d[fn]).reduce((a, v) => a + v, 0);
  }
  
  let datos = pedidoCliente;
  
  try {
      console.log(sumarValoresPropiedades(datos, 'precio'));
      $('#total').append(`El total de tu pedido es $${sumarValoresPropiedades(datos, 'precio')}`)
  } catch (e) {
      console.log(`Error: ${e.message}`);
  }
    $('#mensajeDespedida').append("<h2>¡Adios y gracias por elegirnos!</h2>");
});

//No encontre alguna API que tenga sentido incorporar al proyecto, asique dejo aquí el desafio que hice

const URLGET   = "https://jsonplaceholder.typicode.com/posts"
const infoPost =  { nombre: "Ana", mesa: "24" }

$("#btnAJAX").click(() => { 
    $.post(URLGET, infoPost ,(respuesta, estado) => {
        if(estado === "success"){
            $("#api").prepend(`${respuesta.nombre} ocupa la mensa ${respuesta.mesa}`);
        }  
    });
});