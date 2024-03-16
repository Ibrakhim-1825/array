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


// CODINGBAT

// masala1
// const y = (str) => {
//     result = <<${str}>>
//     return result;
// }
// result = y(prompt());
// console.log(result)

// masala2
// const x = (name) => {
//     return Hello ${name}!
// }
// result = x(prompt());
// console.log(result)



// masala3 
function x(str) {
    result = str.substring(0, str.length / 2);
    if (str.length % 2 == 1) {
        return "Harflarning soni toq !!! ==> " + result;
    }
    return result;
}
// result = x(prompt())
// console.log("Natija ==>", result);


// masala4
// const x = (str, front) => {
//     if (front) {
//         return str.charAt(0)
//     } else {
//         return str.slice(str.length - 1, str.length)
//     }
// }
// true or false
// result = x(prompt(), false)
// console.log(result);

// masala5
// const x = (str1, str2) => {
//     return str1.substring(1) + str2.substring(1);
// }
// result = x(prompt(), prompt())
// console.log(result);



// masala6 
const x = (str) => {
    return str.endsWith("ly")
}
// result = x(prompt())
// console.log(result);


// masala7
// const x = (str1, str2) => {
//     if (str1.length === 0) {
//         str1 = '@';
//     }
//     if (str2.length === 0) {
//         str2 = '@';
//     }
//     return str1.charAt(0) + str2.charAt(str2.length - 1);
// }
// result = x(prompt(), prompt());
// console.log(result);

// masala8
// const x = (str) => {
//     let index = Math.floor((str.length - 3) / 2);
//     return str.substring(index, index + 3);
// }
// result = x(prompt());
// console.log(result);



// masala9 
// const x = (str) => {
//     if (str.slice(0, 4) == "blue") {
//         return str;
//     } else if (str.slice(0, 3) == "red") {
//         return str;
//     } else {
//         return "";
//     }
// }
// result = x(prompt())
// console.log(result);



