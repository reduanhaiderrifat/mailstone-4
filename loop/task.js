const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
// colors.reverse();
// console.log(colors)

// let reverse = [];
// for(const clr of colors){
//    console.log(clr)
//    reverse.unshift(clr)
   
// }
// console.log(reverse)

reverse = [];
for(let i = 0; i < colors.length; i++){
    const clr = colors[i];
    reverse.unshift(clr);
  
}
console.log(reverse)

// taks2
const numbers = [12, 98, 5, 41, 23, 78, 46];
let evenNumbers = [];
for(let i =0; i < numbers.length; i++){
    if(numbers[i] % 2 === 0){
   
    evenNumbers.push(numbers[i])
}
}
console.log(evenNumbers)

// task3

var numbers1 = ['Tom', 'Tim', 'Tin', 'Tik'];

console.log(numbers1.join(''))

// task4

const statement = 'I am a hard working person';

// Split the sentence into an array of words
const wordsArray = statement.split(' ');


// Reverse the array of words
const reversedWordsArray = wordsArray.reverse();

// // Join the reversed words back into a sentence
const reversedStatement = reversedWordsArray.join(' ');
console.log(reversedStatement
    )
// console.log("Reversed Statement:", reversedStatement);
