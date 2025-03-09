/* 2.1 Dado el siguiente array, crea una copia usando spread operators.

2.2 Dado el siguiente objeto, crea una copia usando spread operators.


2.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando 
spread operatos.


2.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos 
con spread operators.


2.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 
pero sin editar el array inicial. De nuevo, usando spread operatos.
 */

// 2.1
const pointsList = [32, 54, 21, 64, 75, 43];

const pointListCopy = [...pointsList];

console.log(pointListCopy);

// 2.2

const toy = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };

const toyCopy = { ...toy };

console.log(toyCopy);

// 2.3

const pointsList2 = [32, 54, 21, 64, 75, 43];
const pointsList3 = [54, 87, 99, 65, 32];

const pointListTogether = [...pointsList2, ...pointsList3];

// 2.4

const toy2 = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };
const toyUpdate = { lights: "rgb", power: ["Volar like a dragon", "MoonWalk"] };

const toyUpdateCopy = { ...toy2, ...toyUpdate };

console.log(toyUpdateCopy);

//2.5

const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

const colorsCopy = [...colors.slice(0, 2), ...colors.slice(3)];

console.log(colorsCopy);

