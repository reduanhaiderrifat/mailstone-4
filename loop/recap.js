// const : can not change?
// let : can change

// if else : condition

// array : [7348 387483 324873]


const numbers = [12, 23, 31, 34, 34, 23, 56];

console.log(numbers)

for(const num of numbers){
    console.log(num)
}


const fruits = ['orange', 'mango', 'lemon', 'bannana'];
for(fruit of fruits){
    console.log(fruit)
    console.log('I want to eat')
}




const num = 7;

if(num < 10){
    
    console.log('choto ekta number paisi')
}
console.log('something new is cooking')

// while loop

let num1 =0;
while(num1 < 5){
    console.log('looping', num1)
    num1 = num1 + 1;
}


let num2 = 1;
let sum = 0;
while(num2 <= 10){
    console.log(num2)
    sum = sum +num2;
    console.log('sum', sum)
    num2 =  num2 + 1;
}


let num3 = 1;
while(num3 <= 10){
  console.log()
  num3 = num3 + 1;
  if(num3 % 2 === 0){
    console.log('even number', num3)
  }
}

// * for (  ;  ;  ){

//  }

//

// for(let i =1; i <= 20; i=i+2){
//     console.log(i)
    
    
// }
let sum4 =0;
for(let i = 11; i<=20; i++){
    sum4 = sum4 +i;
    console.log('sum', sum4)
    console.log(i)
}


// ?decremental loop(for)


// for(let w =10; w >=0; w--){
//     console.log(w)
// }


// while
let n = 10;
while(n >= 0){
    console.log(n)
    n--;
}




let fruits1 = ['orange','mango','bannnana','lemon','apple'];

console.log(fruits1.length)