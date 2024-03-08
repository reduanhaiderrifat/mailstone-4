function calculateMoney(tikets,perGateKeper){
    if(tikets < 0){
        return  "Invalid input number of tikets.Please input valid number!"
    }
    const AmountPerTiket = 120;
    const totalAmountTiket = AmountPerTiket * tikets;
    const perGateKepperFee = 500;
    const totalGateKeperCost = perGateKepperFee * perGateKeper;
    const perStafCost = 50;
    const staff = 8;
    const stafCosts =totalGateKeperCost + perStafCost * staff;
    return  totalAmountTiket - stafCosts;
}


// --------------------------------

function checkName(name){
    if( typeof name !== 'string'){
        return "Invalid";
    }
    const lastCheater = name[name.length - 1].toLowerCase( );
    if(lastCheater === 'a' || lastCheater === 'y' || lastCheater === 'i' || lastCheater === 'e' || lastCheater === 'o' || lastCheater === 'u' || lastCheater === 'w' ){
          return "Good Name";
    } else{
        return "Bad Name";
    }
}


// // ----------------------------------------


function deleteInvalids(array){
    if(!Array.isArray(array)){
        return "Error : Please give a array!";
    }

    const  outputArray = [];
    for(let i = 0; i < array.length; i++ ){
           if(!isNaN( array[i]) && typeof array[i] === 'number') {
            outputArray.push(array[i]);
           }
    }
    return outputArray;
}

// -------------------------------

function password(data){
    if(typeof data !=='object' ){
        return "Invalid";
    }
    if(!data.siteName || !data.birthYear || !data.name){
        return "Invalid";
    }
    const birthYear = data.birthYear.toString();
    if(birthYear.length !==4){
        return 'Invalid';
    }
    const capitalSiteFirstLatter = data.siteName[0].toUpperCase() + data.siteName.slice(1).toLowerCase();
    const password = capitalSiteFirstLatter + '#'+ data.name+'@'+data.birthYear;
    return password;
  }      
  
// -----------------------------------------------------
    
function monthlySavings(payment, costLive) {
    if (!Array.isArray(payment) || typeof costLive !== 'number') {
        return 'Invalid';
    }
    let totalSavings = 0;  
    for (let i = 0; i < payment.length; i++) {
        const currentPayment = payment[i];        
        if (typeof currentPayment !== 'number' || currentPayment < 0) {
            return 'Invalid';
        }
         else{           
            if (currentPayment > 3000) {
            const taxPayment = currentPayment * 0.2;
            const savings = currentPayment - costLive - taxPayment;
            totalSavings += savings;

            if(totalSavings < 0) {
                return "Earn more";
            }
          }
        }
    }
    return totalSavings;
}



