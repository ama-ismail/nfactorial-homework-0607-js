//Dalida's tea shop

//let, const
let customer;
customer = "Amina"
const favorite_tea_Amina = 'black tea with milk';

//string, number, boolean, null, undefined
let black_tea = `black tea`;
let number_of_tea_in_shop = 8; 
let shop_have_favorite_tea_Amina = false;
shop_have_favorite_tea_Amina = true;
let second_favorite_tea_Amina = null;
let number;

//Object
let tea = {
  name: black_tea,
  price: 1000,
  origin: "London",
};

tea.color = "black";
delete tea.color;

tea.print = function () {
  console.log(this.name + this.price);
};
tea.print();

//Arrays
let sort_of_tea = new Array();
sort_of_tea = ["black tea", "green tea", "oolong tea", "white tea", "pu-erh", "yellow tea", "herbal tea", "black tea with milk"];
console.log(sort_of_tea.length);

sort_of_tea.push("yerba mate & guayusa");
sort_of_tea.pop();

sort_of_tea.unshift("black tea with fruits");
sort_of_tea.shift();

let list_tea = ["yerba mate & guayusa"];
list_tea = list_tea.concat(sort_of_tea);

console.log(sort_of_tea.length);

let green_tea = sort_of_tea.filter(sort_of_tea => sort_of_tea === "green tea");
console.log(...green_tea);

let fresh_sort_of_tea = sort_of_tea.map(sort_of_tea => `fresh ${sort_of_tea}`)
console.log(fresh_sort_of_tea);

const { first_name, last_name, ...other} = {
  first_name: "Amina",
  last_name: "Ismailova",
  age: 19,
  gender: "Female",
  profession: "Student",
};
console.log(other);

//Сравнения 
alert(1 == "1")
alert(1 === "1")

let result = 1 === "1" ? "true" : "false";
console.log(result);

let favoriteTea = favorite_tea_Amina ?? "black tea with lemon";
console.log(favoriteTea);

if (favoriteTea) {
  console.log("Amina find favorite tea");
} else{
  console.log("Amina do not find favorite tea");
}

//for, while, do while
for (let i = 0; i < sort_of_tea.length; i++) {
  console.log(i + ". " + sort_of_tea[i])
}

console.log(list_tea.length);
while (list_tea.length != 0) {
  list_tea.pop();
}
console.log(list_tea.length);

//function
/*
function number_of_tea() {
  return sort_of_tea.length;
}*/

let number_of_tea = () => sort_of_tea.length;

//export and import
//import { seller1, seller2 } from "./export.js";
//import { s1 as seller1, s2 as seller2 } from "./export.js";
//import sellers from "export.js";