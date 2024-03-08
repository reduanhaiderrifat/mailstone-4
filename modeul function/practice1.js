function temperature(celsius){
   const fahrenheit = (celsius * 9/5) + 32;
   return fahrenheit;
}
console.log(temperature(42))


const numbers = [5,6,11,12,98, 5];
let uniqe = [];
const output = 2;

function chose(numbers){
    for(const num of numbers){
        if(uniqe.includes(num) === true){
           
            output =output * 1;

        }  
   
    }
    return output;
}
console.log(chose(numbers))

 const numbers1 = [5,6,11,12,98, 5]

const output1 = 0;
    
        if(numbers1.includes(25) === false){
            console.log(output1)
        }
  


        // Write a function to count the number of vowels in a string.



 function input(string){
    let gather = [];
    let count = 0;
    for(num of string){
        if(gather.includes(num)===false){
            count ++;
        }
    }
    return count;
 }
 const result = input('hllo','hey','akash');
 console.log(result)


//  I am learning Programming to become a programmer/ 

function findLongestWord(str) {
    const words = str.split(' ');
    let longestWord = [];
    let longestWordLength = 0;
  
    for (const word of words) {
      const wordLength = word.length;
  
      if (wordLength > longestWordLength) {
        longestWord = word;
        longestWordLength = wordLength;
      }
    }
  
    return longestWord;
  }
  
  const sampleInput = 'I am learning Programming to become a programmer';
  const sampleOutput = findLongestWord(sampleInput);
  console.log(sampleOutput); // Output: Programming

  function find(string){
    const words = string.split(' ');
    let longestWordLength1 = 0;
    let longestWord1 = '';
    for(word of words){
        const wordLength1 = word.length;
        if(wordLength1>longestWordLength1){
         longestWord1= word;
         longestWordLength1 = wordLength1;

        }
    }
    return longestWord1;
  }
  const input1 = find('I am learning Programming to become a programmer');
  console.log(input1);



  function getmax(numbers1){
    let max = numbers1[0];

   for(const num1 of numbers1){
    
    if(num1 > max){
        max = num1;
    }
   }
   return max;
}

const tax = getmax([45,54,56,67,65,54,34]);
console.log(tax)




function countOccurrences(numbers, findNumber) {
    let count = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === findNumber) {
            count++;
        }
    }

    return count;
}

// Example usage:
const numbers3 = [5, 6, 11, 12, 98, 5];
const findNumber1 = 5;
console.log(countOccurrences(numbers3, findNumber1)); // Output: 2

const numbers2 = [5, 6, 11, 12, 98, 5];
const findNumber2 = 25;
console.log(countOccurrences(numbers2, findNumber2)); // Output: 0



// tacks1
// Find the lowest number in the array below.
// const heights2 = [167, 190, 120, 165, 137];


function longestNumbers(numbers){
    let min = numbers[0];
    for(num of numbers){
        if(num < min){
            min = num;
        }
    }
    return min;
}

const heights2 = longestNumbers([167, 190, 120, 165, 137]);
console.log(heights2)



        // tacks2
// Find the friend with the smallest name.
// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];


function   shortestName(names){
      let shortestNameLength = Infinity;
      let shortestName = '';
    for( const name of names){
        const nameLength = name.length;
        if(nameLength < shortestNameLength){
            shortestName = name;
            shortestNameLength = nameLength;
        }
    }
    return shortestName;
}
const name1= shortestName(['rahim', 'robin', 'rafi', 'ron', 'rashed']);
console.log(name1)

function shortestName(names) {
    let shortestNameLength = Infinity; // Set to a large number
    let shortestName = '';
  
    for (const name of names) {
      const nameLength = name.length;
      if (nameLength < shortestNameLength) {
        shortestName = name;
        shortestNameLength = nameLength;
      }
    }
  
    return shortestName;
  }
  
  const name = shortestName(['rahim', 'robin', 'rafi', 'ron', 'rashed']);
  console.log(name);
  



//   task3

// Your task is to calculate the total budget required to buy electronics:

//     laptop = 35000 tk
//     tablet = 15000 tk
//     mobile = 20000 tk
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.


function quantity(laptop,tablet,mobile){
    const perLaptop = 35000;
    const perTablet = 35000;
    const perMobile = 35000;
    const laptoptotal = perLaptop * laptop; 
    const tablettotal = perTablet * tablet; 
    const mobiletotal = perMobile * mobile; 
    const total = laptoptotal + tablettotal + mobiletotal;
return total;
}
console.log(quantity(3,6,9))



// task4?

// You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.

// Input


    const phones = [
        { model: "PhoneA", brand: "Iphone", price: 95000 },
        { model: "PhoneB", brand: "Samsung", price: 40000 },
        { model: "PhoneC", brand: "Oppo", price: 26000 },
        { model: "PhoneD", brand: "Nokia", price: 35000 },
        { model: "PhoneE", brand: "Iphone", price: 105000 },
        { model: "PhoneF", brand: "HTC", price: 48000 },
    ];


    function  average(phones){
        let sum = 0;      
        let holder = 0;
        for( phone of phones){         
            const phonePrice = phone.price;
           
            if(phonePrice > holder){
                holder = phonePrice;
               
              
            }
            sum += phonePrice;
        }
        sum -= holder;
            const avg = sum / (phones.length);
        return avg;
    }
    console.log(average(phones))





    // For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.

 const employees = [
            { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
            { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
            { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
            { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
        ];

        function  calculateSalary(employees){
            let employeeSalaryNowTotal = 0;
            for(const employee of employees){
                const nowSalary = employee.experience * employee.increment;
                const addAfterSalary = nowSalary + employee.starting;
                employeeSalaryNowTotal += addAfterSalary;

            }
            return employeeSalaryNowTotal;
        }
        console.log(calculateSalary( employees))
        
        
        function checkName(name){
            if(name !== 'string'){
                return "Invalid Name";
            }
            const lastCheater = name[name.length - 1].toLowerCase();
            if(lastCheater === 'a' || lastCheater === 'y' || lastCheater === 'i' || lastCheater === 'e' || lastCheater === 'o' || lastCheater === 'u' || lastCheater === 'w' ){
                  return "Good Name";
            } else{
                return "Bad Name";
            }
        }
        const  name3 = checkName('rafee')
        console.log(name3)



  function password(data){
    if(typeof data !=='object' ){
        return "Invalid";
    }
    if(!data.websiteName || !data.birthYear || !data.name){
        return "Invalid";
    }
    const birthYear = data.birthYear.toString();
    if(birthYear.length !==4){
        return 'Invalid';
    }
    const password = 'data.websiteName' + '#'+ 'data.name'+'@'+'data.birthYear';
    return password;
  }      
  const info = { name: "kolimuddin", birthYear: 1999, websiteName: "google" };
  console.log(password(info));