// consvert?

// 12 inch 1 feet 

function inchToFeet(inch){
    const feet = inch / 12;
    return feet;
}
const rifatHeight = inchToFeet(75);
console.log(rifatHeight);


function inchToFeet1(inch){
    const feet = inch / 12;
    const feetNumber = parseInt(feet);
    const inchRemaining = inch % 12;
    const result = feetNumber +'feet'+inchRemaining+'inch';
    return result;
}
const sifatHeight = inchToFeet1(75);
console.log(sifatHeight)


function mileToKilometer(mile){
    const kilo = mile * 1.60934;
    return kilo;
}
console.log(mileToKilometer(12))

function kilomiles(kilo){
    const mile = kilo / 1.60934;
    return mile;
}
console.log(kilomiles(12))

function kilomiles1(kilo){
    const mile = kilo * 0.621371;;
    return parseFloat (mile.toFixed(2));
}
console.log(kilomiles1(12))


// leap year or not leap year >
// simple logic
function isLeapYear(year){
    if(year % 400 === 0){
        return true;

    } else{
        return false;
    }
}
console.log(isLeapYear(2100))


// advance
function isLeapYear1(year){
    if(year % 4 === 0 && year % 100 !== 0){
        return true;
     
    }
    else if(year % 100 ===0 && year % 400 === 0){
        return true;
       
    } 
    else{
        return false;
    }
}
console.log(isLeapYear1(2100))
console.log(isLeapYear1(2000))
console.log(isLeapYear1(2400)) 


function oddNumbers(numbers){
    let odd = [];
    let sum6 = 0;
    for(const number of numbers){
        if(number % 2 !== 0){
            odd.push(number);
            sum6 = sum6 + number;
            const count = odd.length;
         avr = sum6 / count;
        }      
    }
    
    return avr;
   
}
const nums = [23,34,43,44,55,66,22,24];

console.log(oddNumbers(nums));





function evenNumbers1(numbers){
    let even = [];
    let sum7 = 0;
    for(const number1 of numbers){
        if(number1 % 2 === 0){
            even.push(number1);
            sum7= sum7 + number1;
            const count1 = even.length;
         avr1 = sum7 / count1;
        }      
    }
    
    return avr1;
   
}
const nums1 = [23,34,43,44,55,66,22,24];

console.log(evenNumbers1(nums1));


// duplicat

const biryaniKhor =['abul','kabul','cabul','dabul','babul','tabul','abul','abul','kabul','cabul','dabul'];
const numbers1 = [1, 65,2,3,1,1,2,3,56,65,56,44,44,3,4,4]


function noDuplicate(array){
    const uniqe =[];
       for(const item of array){
 if(uniqe.includes(item) === false){
    uniqe.push(item);
 }
   }
   return uniqe;
}
console.log(noDuplicate(biryaniKhor))
const i =noDuplicate(biryaniKhor).sort()
console.log(i)



const min = Math.min(45,56,54,5,456,4);
console.log(min)
const min1 = Math.max(45,56,54,5,456,4);
console.log(min1)

console.log(Math.PI)
console.log(Math.abs(-88))
console.log(Math.round(9.88))
console.log(Math.floor(2.999))
console.log(Math.ceil(2.0001))

console.log(Math.random())
console.log(Math.random()*10)
const rand = Math.round(Math.random()*10)
console.log(rand)


// lottary winner 

// function checkWinner() {
//     // Generate a random winning number (for demonstration purposes)
//     const winningNumber = Math.floor(Math.random() * 1000) + 1;

//     // Get the user's entered ticket number
//     const userTicket = document.getElementById('ticketNumber').value;

//     // Check if the user's ticket number matches the winning number
//     if (userTicket === winningNumber.toString()) {
//       document.getElementById('result').innerText = 'Congratulations! You are the lottery winner!';
//     } else {
//       document.getElementById('result').innerText = 'Sorry, better luck next time!';
//     }
//   }





// date 

