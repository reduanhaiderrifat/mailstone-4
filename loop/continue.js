// for(let i = 1; i <10; i++){
//     if(i %2 !==0){
//        continue;

//     }
//     console.log(i)
// }
// for(let i = 1; i <50; i++){
//     if(i %5 !==0){
//        continue;

//     }
//     console.log(i)
// }

let n =1;
while(n <50){
    n++;
    if(n % 5 !== 0){
        continue;

   }
   
   console.log(n) 
}


// Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
// */



// for(let d = 1; d < 40; d = d + 1){
//    if(d % 2 === 1){

//     continue;
//    }
//    console.log(d)
// }

let g = 1;
while(g < 40){
  
  g++;
  if(g % 2 === 1){
    continue;
  }
  console.log(g)
}

console.log()
// display odd number from 55 to 85 and skip the numbers divisible by 5.



// for(let  r = 55; r <=85; r++){
//     if(r % 5 === 1){
//         console.log(r)
//         continue;
        
//     }
    
// }
console.log()



let h = 55;
while(h <= 85){
    h++;
    if(h % 5 === 1){
        console.log(h)
        continue;
    }
   

}