// // Object literals   {key:"value"}

// //array
// const blogs1 = ["Why only macDonalds", "10 Things to make you go"];

// //object
// const blogs2 = [
//     {title:"Why only macDonalds",likes:30},
//     {title:"10 Things to make you go",likes:25}
// ];

// console.log(blogs1);
// console.log(blogs2);

// let user = {
//   name: "SHIBU",
//   age: 20,
//   email: "Shibu20aeccse@gmail.com",
//   location: "Kolkata",
//  //blogs: ["Why only macDonalds", "10 Things to make you go"],
//     blogs :[
//     {title:"Why only macDonalds",likes:30},
//     {title:"10 Things to make you go",likes:25}
//     ],
//   login: function () {
//     console.log("USER IS LOGGED IN");
//   },
//   //   logout: function () {
//   //     console.log("USER IS LOGGED IN");
//   //   },

//   logout() {
//     console.log("USER IS LOGGED IN");
//   },

//   logBlogs() {
//     //this keyword is the context object which represent the contect in which current code is executed
//     //console.log(this.blogs);

//     console.log("THIS USER HAS WRITTEN THE FOLLOWING BLOGS: ");
//     this.blogs.forEach((blog) => {
//       console.log(blog.title, blog.likes);
//     });
//   },
// };

// // . notation
//  console.log(user);
// // console.log(user.email);

// // //user.age=25;
// // console.log(user.age);

// // // console.log(user['name']);
// // // user['name'] = "RAM";
// // // console.log(user['name']);

// // console.log(typeof user);
// // console.log(typeof user.name);

// // console.log(user.login) // works as property
// // console.log(user.login()); // works as method[which is defined incide an object].
// // console.log(user.logout());

// user.logBlogs();




//PRIMITIVE VALUE [data is stored in the stack]

let scoreOne = 50;
let scoreTwo = scoreOne;
console.log(`scoreOne is ${scoreOne} and scoreTwo ia ${scoreTwo}`);
scoreOne=100;
console.log(`scoreOne is ${scoreOne} and scoreTwo ia ${scoreTwo}`);

//REFERENCE VALUES [the data is stored once in the heap ]
const userOne = {name:"Ryu" ,age:20};
const userTwo =userOne;
console.log(userOne,userTwo);
userOne.age=40;
console.log(userOne,userTwo);

