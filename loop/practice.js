let num = 0;
while(num <= 60){
    console.log("I will invest at least 6 hrs every single day for next 60 days!")
    num += 1; 
}

// odd numbers 

let num1 = 61;
let sum = 0;
while(num1 < 100){
    num1 = num1 + 1;
    if(num1 % 2 === 1){
        console.log()
        sum = sum + num1;
        console.log('odd number',sum) 
       
    }
    
    
}



// even numbers ?

let num3 = 78;
let sum1 = 0;
while(num3 <= 98){
    
    num3 += 1;
    if(num3 % 2 === 0){
        console.log();
        sum1 =sum1 + num3;
        console.log('even numbers', sum1)
    }
}





// Subtask-2: Sum of even numbers from 51 to 85 using while loop
let evenSum = 0;
let currentNumber = 51;

while (currentNumber <= 85) {
  if (currentNumber % 2 === 0) {
    evenSum += currentNumber;
  }
  currentNumber++;
}

console.log("Sum of even numbers from 51 to 85 using while loop:", evenSum);


// Function to generate a multiplication table for a given number using a while loop
function generateMultiplicationTableWhile(number, limit) {
    let i = 1;
  
    while (i <= limit) {
      console.log(`${i} x ${number} = ${i * number}`);
      i++;
    }
  }
  
  // Generate a multiplication table for the number 5 up to 10 using a while loop
  generateMultiplicationTableWhile(5, 10);



 const string = ['I will invest at least 6 hrs every single day for next 60 days'];
 console.log(string);
 for(strings of string){
    console.log(string)
 }



 let n = 0;
 while(n <=60){
    console.log('sjjhfdnn',n)
    n++;
 }

 for(let m = 0; m <= 60; m++){
    console.log('uehewhr',m)
 }

//  let sum5 = 0;
//  for(let d = 61; d < 100; d = d + 2){
//     sum5 = sum5 + d;
//     console.log(sum5)
//     console.log(d)
//  }

 let t = 61;
 let sum6 = 0;
while(t <= 100){
    if(t % 2 === 1){
        sum6 = sum6 + t;
        console.log('hey', sum6)
        console.log(t)
    }
    
    t = t + 2;
}

// let sum7 = 0;
// for(let a = 2; a <= 20; a += 2 ){
//     // if(a % 2 !== 1){
//         sum7 = sum7 + a;
//         console.log('sum of even num is', sum7)
//         console.log(a)
//     // }
// }

  

// dividible

// for(let q = 1; q <=30; q++){
//     if(q % 5===0){
//         console.log(q)
//     }
// }

// for(let q = 1; q <=30; q++){
//     if(q % 3 === 0 || q % 5 === 0){
//         console.log(q)
//     }
// }
for(let q = 1; q <=30; q++){
    if(q % 3 === 0 && q % 5 === 0){
        console.log(q)
    }
}

// give divisible by 3 sum
let total = 0;
for(let r =1; r <= 20; r++){
    if (r % 3=== 0){
        total = total + r;
        console.log('total', total)
        console.log(r)
    }
}