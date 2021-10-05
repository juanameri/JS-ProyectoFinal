const nombreDinamico = prompt("¿Cual es tu nombre?");
console.log("¡Hola "+nombreDinamico+"! Bienvenid@ al Restaurante");

const cantidadPersonas = Number(prompt("¿Cuantas personas van a ser?"));
const fumadores = prompt("¿Alguien fuma?");

if (fumadores == "si"){
    if (cantidadPersonas >= 5){
        console.log("Ok " + nombreDinamico + ", subí por la escalera de mano derecha y seras ubicado en la terraza");
    } else {
        console.log("Ok " + nombreDinamico + ", subí por la escalera de mano izquierda y seras ubicado en la terraza");
    }
} else if (fumadores == "no"){
    if (cantidadPersonas < 5){
        console.log("Ok " + nombreDinamico + ", avanza hacia mano derecha y seras ubicado por un asistente");
    } else {
        console.log("Ok " + nombreDinamico + ", avanza hacia mano izquierda y seras ubicado por un asistente");
    }
}

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
//asi....
const entrada1 = comidas.push(new Comida("picada", 50));
const platoPrincipal1 = comidas.push(new Comida("milanesaConPure", 150));
const postre1 = comidas.push(new Comida("flan", 40));
// o asi...
comidas.push(new Comida("helado", 35));
comidas.push(new Comida("vitelTone", 60));
comidas.push(new Comida("tallarinesConTuco", 100));
comidas.push(new Comida("tarta", 30));
comidas.push(new Comida("ensaladaCesar", 75));
comidas.push(new Comida("sopaDeCalabaza", 35));

console.log(comidas)
// la idea seria poder mandarle la function .ordenar a las comidas que sean, luego eso se usa para hacer un map a la lista,
// que te genere otra lista con solo los que ordenado es true y luego de ahi saque el precio total de la orden

const preciosConDescuentoPrimavera = comidas.map(comida => comida.precio = comida.precio*75/100);
for (const comida of comidas) {
    console.log(comida.nombre);
    console.log(comida.precio);
}

function precioTotal (entrada, platoPrincipal, postre){
    sumaTotal = entrada + platoPrincipal + postre;
    return console.log("El precio total de su pedido es $"+ sumaTotal);
}