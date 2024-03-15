// // 5-masala

// let arr = ["salom", 1, 2, 3, 4, true , ()=>{}, 534];

// const X = (a) => {
//     const newArr = [];
//     for(let i = 0 ; i <= a.length ; i++ ){
//         if(typeof a[i] === "number") {
//             newArr.push(a[i]);
//         }
//     }
//     return newArr;
// }

// console.log(X(arr));

// 6-masala

// let str = ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio fuga, deserunt mollitia beatae ullam excepturi quasi nulla molestiae voluptatem illum tempora voluptates natus asperiores vero! Eligendi hic consequatur eum aliquam?`;


// const x = (a) => {
//     let num = "";
//     for (let i = 0; i <= a.length; i++) {
//         if (a[i - 1]  ===  " ") {
//             num += a[i].toUpperCase();
//         }
//         else {
//             num += a[i];
//         }
//     }
//     return num;
// }

// console.log(x(str));

// 7-masala

// let str = "abcd";

// const  x = (a) => {
//     let newStr = "";
//     for ( let i = 0 ; i < a.length ; i++){
//         if (i !== 0 ) {
//             newStr += a[i].repeat(i+1) + "-";
//         } else {
//             newStr += a[i].repeat(i+1) + "-";
//         }
//     }
//     return newStr;

// }
// console.log(x(str));

// 8-masala

// let str = "aziza";
//  const x = (a) => {
//     let idf = "";
//     for (let i = a.length-1 ;i >= 0 ; i-- ){
//         idf += a[i];

//     }
//     return idf == a

//  }
//   console.log(x(str));

// 9-masala

// let str = "qalesan"

// function x(a) {
//     for (let i = 0; i < a.length; i++) {
//         for (let j = i + 1; j < a.length; j++) {
//             if (a[i] === a[j]) {
//                 return false; 
//             }
//         }
//     }
//     return true; 
// }

// console.log(x(str)); 

// 10-masala

// function x(a) {
//     return a % 2 === 0;
// }

// function A(b) {
//     var sum = 0;
//     for (let i = 0; i < b.length; i++) {
//         sum += b[i];
//     }
//     return x(sum) ? "juft" : "toq";
// }

// let numbers = [1, 2, 3, 4, 5];
// console.log(A(numbers)); 

// 11-masala

// function boluvchilariniTop(raqam) {
//     let boluvchilar = [];
//     for (let i = 1; i <= raqam; i++) {
//         if (raqam % i === 0) {
//             boluvchilar.push(i);
//         }
//     }
//     return boluvchilar;
// }

// let raqam = 25;
// let boluvchilar = boluvchilariniTop(raqam);
// console.log(raqam + " raqami boluvchilari: " + boluvchilar);



