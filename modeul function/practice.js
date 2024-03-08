let j = 56;
console.log('namota :')
for(let i = 1; i <= 10; i++){
   
   const mul = j * i;
 
    console.log(j, '*',i , '=', mul)
}


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
console.log('heiest numbers is',tax)


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





function   shortestName(names){
      let shortestNameLength = Infinity;
      let shortestName = '';
    for(name of names){
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


const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];
function findAveragePhonePrice(phones) {
    let sum = 0;
    let highestPrice = 0;

    for (const phone of phones) {
        const phonePrice = phone.price;

        // Update the highestPrice if the current phone's price is greater
        if (phonePrice > highestPrice) {
            highestPrice = phonePrice;
        }

        // Always add the current phone's price to the sum
        sum += phonePrice;
    }

    // Subtract the highestPrice from the sum to get the sum without the highest value
    sum -= highestPrice;

    // Calculate the average by dividing the sum by the number of phones
    const average = sum / phones.length;

    return average;
}

console.log(findAveragePhonePrice(phones));



function checkName(name) {
    if (typeof name !== 'string') {
        return "Invalid Name";
    }
    
    const lastChar = name[name.length - 1].toLowerCase();

    if (lastChar === 'a' || lastChar === 'y' || lastChar === 'i' || lastChar === 'e' || lastChar === 'o' || lastChar === 'u' || lastChar === 'w') {
        return "Good Name";
    } else {
        return "Bad Name";
    }
}

const name4 = checkName('rafee');
console.log(name4);


function monthlySavings(payment, costLive) {
    if (!Array.isArray(payment) || typeof costLive !== 'number') {
        return 'Invalid';
    }

    let totalSavings = 0;

    for (let i = 0; i < payment.length; i++) {
        const currentPayment = payment[i];

        if (typeof currentPayment !== 'number' || currentPayment < 0) {
            return 'Invalid';
        } else if (currentPayment > 3000) {
            const taxPayment = currentPayment * 0.2;
            const savings = currentPayment - costLive - taxPayment;
            totalSavings += savings;
            
            if (totalSavings < 0) {
                return "Earn more";
            }
        }
    }

    

    return totalSavings;
}

console.log(monthlySavings([500,800,3000,400],6888))

// ====================-------------------================================

function password(info) {
    // Check if the input is an object
    if (typeof info !== 'object' || info === null) {
        return 'Invalid';
    }

    // Check if the required properties exist
    if (!info.name || !info.birthYear || !info.siteName) {
        return 'Invalid';
    }

    // Validate birthYear
    const birthYearStr = info.birthYear.toString();
    if (birthYearStr.length !== 4) {
        return 'Invalid';
    }

    // Construct the password using the specified format
    const password = `${info.siteName}#${info.name}@${info.birthYear}`;
    return password;
}

// Example usage:
const info = { name: "kolimuddin", birthYear: 1999, siteName: "google" };
console.log(password(info));
