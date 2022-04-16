/*

//decleration [it can be place above or below the call]
function greet() {
  console.log("NAMASTE");
}

//expression [alwasy dec above the call and included ";" at the end]
const speak = function (name = "Rajat") {
  console.log(`NAMASTE EXPRESSION ${name}`);
};

const speak = () => "NAMASTE EXPRESSION";
console.log(speak());

greet();
speak("SHIBU");

function Rect(l, b) {
  return l * b;
}
let area = Rect(10, 20);
console.log("AREA IS :" + area);

function volCuboid(area, hight) {
    return area * hight;
}

// FAT ARROW
const volCuboid = (area, hight) => area * hight;
let volOfCuboid = volCuboid(area, 10);
console.log("VOLUME IS :" + volOfCuboid);


*/

// CALLBACK

/*
// decleration
const myFun = (callbackFun) => {
  let val = 25;
  callbackFun(val);
};

// call
myFun(function (val) {
   console.log(val);
 });

myFun(val => {
  console.log(val);
});
*/

//FOREACH
/*
let people = ["SHIBU", "RAJAT", "ANIKET", "AKASH"];

 it will print somthing 5 times
people.forEach(function(){
    console.log("somthing");
})

people.forEach((person, index) => {
  console.log(index, person);
});
we can write is as

const logPerson = (person, index) => {
  console.log(`${index} - hello ${person} `);
};
people.forEach(logPerson);
*/

const ul = document.querySelector(".people");
const people = ["SHIBU", "RAJAT", "ANIKET", "AKASH"];
let html = ``;

people.forEach(function (person) {
  // create html template
  html += `<li style="color: purple">${person}</li>`;
});

console.log(html);
ul.innerHTML = html;
