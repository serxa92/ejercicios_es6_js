/* 1.1 En base al siguiente javascript, crea variables en base a las propiedades 
del objeto usando object destructuring e imprimelas por consola. Cuidado, 
no hace falta hacer destructuring del array, solo del objeto. 
1.2 En base al siguiente javascript, usa destructuring para crear 3 variables 
llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormente
imprimelo por consola.
1.3 En base al siguiente javascript, usa destructuring para crear 2 
variables igualandolo a la función e imprimiendolo por consola.
1.4 En base al siguiente javascript, usa destructuring para crear las 
variables name y itv con sus respectivos valores. Posteriormente crea 
3 variables usando igualmente el destructuring para cada uno de los años 
y comprueba que todo esta bien imprimiendolo. */

// 1.1
const game = {
  title: "The last us 2",
  gender: ["action", "zombie", "survival"],
  year: 2020,
};

const gamesDestructuring = ({ title, gender, year }) => {
  console.log(`Título: ${title}`);
  console.log(`Género: ${gender.toString()}`);
  console.log(`Año: ${year}`);
};

gamesDestructuring(game);

// 1.2

const fruits = ["Banana", "Strawberry", "Orange"];

const fruitsDestructuring = ([fruit1, fruit2, fruit3]) => {
  console.log(fruit1);
  console.log(fruit2);
  console.log(fruit3);
};

fruitsDestructuring(fruits);

// 1.3
const animalFunction = () => {
  return { name: "Bengal Tiger", race: "Tiger" };
};

const {name: animalName,race} = animalFunction(); 

console.log(`Name: ${animalName}`); 
console.log(`Race: ${race}`);

// 1.4

const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] }

const {name: carName, itv} = car;
const [year1, year2, year3] = itv;

console.log(carName);
console.log(itv);
console.log(year1);
console.log(year2);
console.log(year3);


