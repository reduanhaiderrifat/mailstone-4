function multiply(num1, num2){
    if(typeof num1!=='number' || typeof num2!=='number'){
        return 'Please!  Enter a valid number'
    }
    return num1 * num2;
}
console.log( multiply(5+2,'seven'))



function fullName(first, second){
    if(typeof first!=='string' || typeof second!=='string'){
        return 'Please!  Enter a valid Name'
    }

    return first+ " " +second;
}
console.log(fullName('fit','seven'))