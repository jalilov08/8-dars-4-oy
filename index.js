// // let myArray = ['apple', 'banana', 'cherry', 'date'];
// // let deletedItems = myArray.splice(2, 1, 'orange', 'grape');

// // console.log(myArray); // ['apple', 'banana', 'orange', 'grape', 'date']
// // console.log(deletedItems); // ['cherry']



// // let prime_numbers = [2, 3, 5, 7, 9, 11];

// // // replace 1 element from index 4 by 13
// // let removedElement = prime_numbers.splice(4, 1, 13);
// // console.log(removedElement);
// // console.log(prime_numbers);

////VAZIFA
//1-----
// function getLevel2(n) {
//     const result = [];
//     let num = 2;
//     for (let i = 1; i <= n; i++) {
//       result.push(num ** i);
//     }
//     return result;
//   }
//   const n = 5;
//   console.log(getLevel2(n)); 


//2----
// function generateArray(n, A, B) {
//     const result = [A, B];
//     let sum = A + B;
//     for (let i = 2; i < n; i++) {
//       result.push(sum);
//       sum += result[i - 1];
//     }
//     return result;
//   }
//   const n = 5;
//   const A = 2;
//   const B = 3;
//   console.log(generateArray(n, A, B)); 
  
//3----
// function reverseArray(arr) {
//     const reversedArray = arr.slice().reverse();
//     return reversedArray;
//   }
//   const inputArray = [1, 2, 3, 4, 5];
//   const reversed = reverseArray(inputArray);
//   console.log(reversed);


//4----
// function findAndPrintOdds(arr) {
//     const odds = arr.filter(num => num % 2 !== 0);
//     const oddIndices = odds.map((_, index) => index + 1);
//     console.log("Massiv elementlar: " + arr.join(" "));
//     console.log("Natija: " + odds.join(" ") + " toqlar soni = " + odds.length);
//     console.log("Toqlar indekslari o'sish tartibi: " + oddIndices.join(" "));
//   }
//   const inputArray = [4, 5, 7, 8, 6, 9];
//   findAndPrintOdds(inputArray);


//6----
// function printEverySecondElement(arr) {
//     const result = [];
//     for (let i = 0; i < arr.length; i += 2) {
//       result.push(arr[i]);
//     }
//     console.log("Natija: " + result.join(" "));
//   }
//   const inputArray = [4, 5, 7, 8, 6, 9];
//   printEverySecondElement(inputArray);

//7----
// function printEverySecondFromEnd(arr) {
//     const result = [];
//     for (let i = arr.length - 1; i >= 0; i -= 2) {
//       result.push(arr[i]);
//     }
//     console.log("Natija: " + result.join(" "));
//   } 
//   const inputArray = [4, 5, 7, 8, 6, 9];
//   printEverySecondFromEnd(inputArray);


//8----
// function getOddMin(arr) {
//     let min = Infinity;
//     for (let i = 1; i < arr.length; i += 2) {
//       if (arr[i] < min) {
//         min = arr[i];
//       } }
//     return min;
//   }
//   const inputArray = [4, 5, 7, 8, 6, 9];
//   const min = getOddMin(inputArray);
//   console.log(min);
  

//9----
// function getEvenMax(arr) {
//     let max = -Infinity;
//     for (let i = 1; i < arr.length; i += 2) {
//       if (arr[i] > max) {
//         max = arr[i];
//       }}
//     return max;
//   }
//   const inputArray = [4, 5, 7, 8, 6, 9];
//   const max = getEvenMax(inputArray);
//   console.log(max);
  

//10----
// function getLevel2(n) {
//   let res;
//   let sum = 1;
//   for (let i = 0; i < n; i++) {
//     const value = 2 ** sum;
//     res.push(value);
//     sum += 2;
//   }
//   return res;
// }
// const number = 5;
// const outputArray = getLevel2(inputNumber);
// console.log(outputArray); 
