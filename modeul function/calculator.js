function add(num1, num2){
    return num1 + num2;
}
function subtract(num1, num2){
    return num1 - num2;
}
function multiply(num1, num2){
    return num1 * num2;
}
function divided(num1, num2){
    return num1 / num2;
}

function calculator(a, b, oparation){
    if(oparation === 'add'){
        const result = add(a, b);
        return result;
    }
    else if(oparation === 'subtract'){
            return subtract (a,b);
    } else if(oparation === 'multiply'){
        return  multiply(a,b);
    } else if(oparation === 'divided'){
        return devided(a,b);
    } else{
        return  "Error! Invalid operation"
    }

}
const result = calculator(4,5,'root');
console.log(result)