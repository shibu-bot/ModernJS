// const para = document.querySelector("div.error");
// // const para = document.querySelector("body > h1");
// // console.log(para);

// const paras = document.querySelectorAll("p");
// // console.log(paras); // opens a nodeList so
// // console.log(paras[2]);

// // paras.forEach((p) => {
// //   console.log(p);
// // });

// const errors = document.querySelectorAll(".error");
// console.log(errors);

// errors.forEach((p) => {
//   console.log(p);
// });

// SAME WITH [ID,CLASS,TAG].

const para = document.querySelector("p");
// console.log(para.innerHTML);
// console.log(para.innerText);
// para.innerText = "Changed content";

const paras = document.querySelectorAll("p");
// paras.forEach((p) => {
//   console.log(p.innerHTML);
//   p.innerText += " new innerText";
// });

const content = document.querySelector(".content");
// console.log(content.innerHTML);
// content.innerHTML = "<h2>THIS IS THE CONTENT H2 </h2>";

const people = ["mario", "lego", "dood"];
// people.forEach((person) => {
//   content.innerHTML += `<p>${person}</p>`;
// });

// const link = document.querySelector("a");
// console.log(link.getAttribute("href"));
// link.setAttribute("href", "https://facebook.com");
// link.innerText = "FACEBOOK LINK";

// const mssg = document.querySelector("p#error");
// console.log(mssg);
// console.log(mssg.getAttribute("id"));
// mssg.setAttribute("id", "success");
// mssg.setAttribute("style", "background-color:green");
// console.log(mssg.getAttribute("id"));

const title = document.querySelector("h1");
//title.setAttribute("style", "background-color: green;margin: 50px");
console.log(title.style);
title.style.margin = "20px";
title.style.backgroundColor = "green";
