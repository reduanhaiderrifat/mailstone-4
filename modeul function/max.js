// const disha = 56;
// const rifat = 65;

// if(disha > rifat){
//      console.log('disha get the stawberry')
// }
// else{
//     console.log('rifat will get the stawberrry')
// }


// function getmax(num1, num2){
//     if (num1>num2){
//         return num1;
//     }
//     else{
//         return num2;
//     }
// }

// console.log(getmax(54, 56))


// const jim = 45;
// const tim = 65;
// const kim = 78;

// if(jim>tim && jim>kim){
//     console.log('reture jim')
// } else if(tim>jim && tim>kim){
//     console.log('reture tim')
// } else{
//     console.log('reture kim')
// }


// function big(jim,tim,kim){
//     if(jim>tim && jim>kim){
//         return jim;
//     } else if(tim > jim && tim>kim){
//         return tim;
//     } else{
//         return  kim;
//     }
// }

// console.log(big(34, 54, 67))


// const max = Math.max(45,56,534,234,56,7,2)
// console.log(max)




// function getmax(rubber){
//     let max =rubber[0];

//    for(const num1 of rubber){
    
//     if(num1 > max){
//         max = num1;
//     }
//    }
//    return max;
// }

// const tax = getmax([45,54,56,67,65,54,34]);
// console.log(tax)

// function getmaxTax(taxes){
//     let maxTax = taxes[0];
    
//     for(const tax of taxes){
//         if(tax > maxTax){
//             maxTax = tax;
//         }
//     }
//     return maxTax;
// }

// const taxes = [45,54,56,67,65,54,34];
// const maxTax = getmaxTax(taxes);
// console.log(maxTax);


function getmax(numbers1){
    let max = numbers1[0];
    for(const num of numbers1){
        if(num > max){
            max = num;
        }
    }
    return max;
}

console.log(getmax([45,54,56,67,65,54,34]))
function monthlySavings(payment, costLive) {
    if (!Array.isArray(payment) || typeof costLive !== 'number') {
        return 'Invalid';
    }

    let totalSavings = 0;

    for (let i = 0; i < payment.length; i++) {
        const currentPayment = payment[i];

        if (typeof currentPayment !== 'number' || currentPayment < 0) {
            return 'Invalid';
        } else {
            const taxPayment = currentPayment > 3000 ? currentPayment * 0.2 : 0;
            const savings = currentPayment - costLive - taxPayment;

            if (savings > 0) {
                totalSavings += savings;
            } else {
                return "Earn more";
            }
        }
    }

    return totalSavings;
}
console.log(monthlySavings([ 1000 , 2000 , 3000 ] , 5400))

function monthlySavings(payment, costLive) {
    if (!Array.isArray(payment) || typeof costLive !== 'number') {
        return 'Invalid';
    }

    let totalSavings = 0;
    let totalPayment = 0;

    for (let i = 0; i < payment.length; i++) {
        const currentPayment = payment[i];

        if (typeof currentPayment !== 'number' || currentPayment < 0) {
            return 'Invalid';
        } else {
            totalPayment += currentPayment;

            if (currentPayment > 3000) {
                const taxPayment = currentPayment * 0.2;
                const savings = currentPayment - costLive - taxPayment;
                totalSavings += savings;

                if (totalSavings < 0) {
                    return "Earn more";
                }
            }
        }
    }

    return totalSavings;
}

console.log(monthlySavings([500, 800, 3000, 400], 6888));
