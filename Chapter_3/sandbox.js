// LOOPS

const names = ["Shibu", "Aniket", "Rajat", "Shyam"];

// for (let i = 0; i < names.length; i++) {
//   //console.log(i + " " + names[i]);
//   const html = `<div>${names[i]}</div>`;
//   console.log(html);
// }

// let i = 0;
// while (i < names.length) {
//   console.log(i + " " + names[i]);
//   const html = `<div>${names[i]}</div>`;
//   console.log(html);
//   i++;
// }

// let i = 0;
// do {
//   console.log(i + " " + names[i]);
//   i++;
// } while (i < 5);

if (names.length > 2) {
  let i = 0;
  do {
    console.log(i + " " + names[i]);
    i++;
  } while (i < 4);
}
